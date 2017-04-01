import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

import { IIdentifiable } from '../model';
import { IDataService } from '../services/data.service';

export class BaseSelectComponent<T extends IIdentifiable, TService extends IDataService<T>> implements OnInit {

  private isLoading : boolean = false;
  private isInitialized  :boolean = false;
  private _value: string;
  private _source: T[] = new Array<T>();
  private _disabled: boolean = false;
  
  private _referenceId : string = undefined;
  private _filter : any = undefined;

  @Output() valueChange = new EventEmitter();
  @Output() onIWhantInfo = new EventEmitter();
  @Output() onIWhantCreateNew = new EventEmitter();
  @Output() countChange = new EventEmitter();

  @Input('count') _count : number = 0;
  @Input('onRefresh') onRefresh = new Subject<void>();
  
  @Input('disabled') 
  set disabled(val: boolean) {
    this._disabled = val;
  }
  get disabled() {
    return this._disabled;
  }

  @Input('value') 
  set value(val: string) {
    this._value = val;
    this.valueChange.emit(val);
  }
  get value() {
    return this._value;
  }

  @Input('source')
  set source(val: T[]) {
    this._source = val;
  }
  get source() {
    return this._source;
  }
  
  get count() {
    return this._count;
  }

  set count(val) {
    this._count = val;
    this.countChange.emit(this._count);
  }
  
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

  constructor(private route: ActivatedRoute, private service: TService) { }

  ngOnInit() {
    this.refresh().then(() => this.isInitialized = true);
    this.onRefresh.subscribe(() => this.refresh());
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
        this.source = r.data;
        this.count = r.totalCount;
        this.isLoading = false;
      });
  }

  trackById(index, item: T) {
    return item ? item.id : undefined;
  }

  onIWhantInfoClick() {
    this.onIWhantInfo.emit(this.value);
  }

  onIWhantCreateNewClick() {
    this.onIWhantCreateNew.emit();
  }

}