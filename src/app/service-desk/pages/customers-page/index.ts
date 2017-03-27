import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-customers-page',
  templateUrl: 'index.html'
})
export class CustomersPage implements OnInit {

  public mainTab = 'mainTab';

  links : any[] = new Array<any>();
  activeLink: any;
  _activeTab: string = "mainTab";
  _prevTab: string = "mainTab";

  setActiveLink(link) {
    this.activeTab = link.id;
    this.activeLink = link;
  }

  getRefLinks(link) {
    return link ? link.refLinks || [] : [];
  }

  set activeTab(val) {
    this._prevTab = this._activeTab;
    this._activeTab = val; 
  }

  get activeTab() : string {
    return this._activeTab;
  }

  constructor(private route: ActivatedRoute, private location: Location, private router: Router) { 
  }

  ngOnInit() {
  }

  /// Customer 

  customer_length: number = 0;
  refreshCustomerList = new Subject<void>();

  handleCustomerLoaded(data) {
    console.log('handleCustomerTaskLoaded ' + data);
  }

  handleCustomerCanceled($event, link) {
    this.removeTab(link);
  }

  handleCustomerUpdated($event, link) {
    this.removeTab(link);
    this.refreshCustomerList.next();
  }

  handleCustomerDeleted($event, link) {
    this.removeTab(link);
    this.refreshCustomerList.next();
  }

  handleCustomerSelected(data) {
    console.log('handleCustomerSelected ' + data);

    this.router.navigate([data.id], { relativeTo: this.route });

  /*
    this.createTab({ 
      id: data.id, 
      name: 'Клиент ' + data['name'], 
      type: 'app-customer-detail', 
      refLinks: [
        { id: 'app-address-list', referenceId: data.id, name: 'Адреса', type: 'app-address-list' }] 
      });
      */
  }

  onCustomerCreate() {
    let command = 'CustomerCreate';
    this.createTab({ id: command, name: 'Новый клиент', type: 'app-customer-create' });
  }

  /// Customer (end)


  removeTab(link) {
    let idx = this.links.findIndex(r => r.id == link['id']);
    if (idx > -1) {
      this.activeTab = this._prevTab;
      this.links.splice(idx, 1);
    }
  }

  createTab(link) {

    if (!this.links.find(r => r.id == link.id)) {
      this.links.push(link);
    }

    this.setActiveLink(link);
  }

}
