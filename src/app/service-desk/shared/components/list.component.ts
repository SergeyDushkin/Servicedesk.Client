import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

import { IIdentifiable } from '../model';
import { IDataService } from '../services/data.service';

export class BaseListComponent<T extends IIdentifiable, TService extends IDataService<T>> implements OnInit {

  public isLoading : boolean;
  private isInitialized  :boolean = false;
  private sortBy = "year";
  private sortOrder = "desc";

  public data : T[];
  
  private _referenceId : string = undefined;
  private _filter : any = undefined;

  @Output() onSelect = new EventEmitter();
  @Output() countChange = new EventEmitter();
  
  @Input('count') _count : number = 0;
  @Input('onRefresh') onRefresh = new Subject<void>();
  @Input('onRemoveSelected') onRemoveSelected = new Subject<void>();
  
  @Input('referenceId') 
  set referenceId (val) {
    this._referenceId = val;

    if (this.isInitialized) {
      this.refresh();
    }
  }

  get referenceId() {
    return this._referenceId;
  }
  
  @Input('filter') 
  set filter (val) {
    this._filter = val;

    if (this.isInitialized) {
      this.refresh();
    }
  }

  get filter() {
    return this._filter;
  }
  
  public get count() {
    return this._count;
  }

  public set count(val) {
    this._count = val;
    this.countChange.emit(this._count);
  }

  constructor(private route: ActivatedRoute, private service: TService) { 
  }

  ngOnInit() {
    this.refresh().then(() => this.isInitialized = true);

    if (this.onRefresh) {
      this.onRefresh.subscribe(() => this.refresh());
    }

    if (this.onRemoveSelected) {
      this.onRemoveSelected.subscribe(() => this.removeSelected());
    }
  }
  
  trackById(index, item) {
    return item.id;
  }  

  updateFilter(event, fields: any[]) {
    let val = event.target.value.toLowerCase();
  
    // filter our data
    //let temp = this.cache.filter(function(d) {
    //  fields.map(f => d[f].toLowerCase().indexOf(val))
    //  return d.departments.toLowerCase().indexOf(val) !== -1 || !val;
    //});
    // update the rows
    //this.data = temp;
  }

  selectRow(data) {
    this.onSelect.emit(data);
  }

  refresh() {
    
    if (this.referenceId) {
      if (this.filter) {
        if (!this.filter.referenceId) {
          this.filter.referenceId = this.referenceId;
        }
      } else {
        this.filter = { referenceId: this.referenceId };
      }
    }

    this.isLoading = true;
    return this.service.get({ reference: this.referenceId, params: this.filter }).toPromise()
      .then(r => {
        this.data = r.data;
        this.count = r.totalCount;
        this.isLoading = false;
      });
  }

  removeSelected() {
    
    let tasks = this.data
      .filter(r => r['selected'] == true)
      .map(r => this.service.delete({ id: r.id }));
    
    if (tasks.length == 0) return;

    Observable.forkJoin(tasks).subscribe(response => {
      this.service.constructor.name + ': record was deleted';
      this.refresh();
    });
  }

}
