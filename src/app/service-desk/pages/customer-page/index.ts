import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-customer-page',
  templateUrl: 'index.html'
})
export class CustomerPage implements OnInit {

  public customerDetailTab = 'customerDetailTab';
  public addressListTab = 'addressListTab';
  public userListTab = 'userListTab';
  public contractListTab = 'contractListTab';
  public unitListTab = 'unitListTab';

  id: string;
  links : any[] = new Array<any>();
  activeLink: any;
  _activeTab: string = 'customerDetailTab';
  _prevTab: string = 'customerDetailTab';

  tabs = [
    { type: 'app-address-list', refresh: new Subject<void>(), count: 0, title: 'Адреса' },
    { type: 'app-user-list', refresh: new Subject<void>(), count: 0, title: 'Сотрудники' },
    { type: 'app-unit-list', refresh: new Subject<void>(), count: 0, title: 'Орг. структура' },
    { type: 'app-contract-list', refresh: new Subject<void>(), count: 0, title: 'Контракты' }
  ];

  refresh = {
    'app-address-list' : new Subject<void>(),
    'app-user-list' : new Subject<void>(),
    'app-unit-list' : new Subject<void>(),
    'app-contract-list' : new Subject<void>(),
  };

  count = {
    'app-address-list' : 0,
    'app-user-list' : 0,
    'app-unit-list' : 0,
    'app-contract-list' : 0,
  };

  setActiveLink(link) {
    this.activeTab = link.id;
    this.activeLink = link;
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
    this.route.params.subscribe(data => {
      this.id = data['id'];
    });
  }

  handleCanceled($event, link) {
    this.removeTab(link);
  }

  handleUpdated($event, link, type) {
    this.removeTab(link);
    this.refresh[type].next();
  }

  /// Customer 

  handleCustomerLoaded(data) {
    console.log('handleCustomerTaskLoaded ' + data);
  }

  handleCustomerCanceled($event, link) {
    this.removeTab(link);
  }

  handleCustomerUpdated($event, link) {
    //this.removeTab(link);
  }
  handleCustomerDeleted($event, link) {
    //this.removeTab(link);
  }

  handleCustomerSelected(data) {
    console.log('handleCustomerSelected ' + data);
  }

  /// Customer (end)

  handleAddressSelected(data) {
    console.log('handleAddressSelected ' + data);
    this.router.navigate(['/sd/address', data.id]);
  }

  handleUserSelected(data) {
    console.log('handleUserSelected ' + data);
    this.router.navigate(['/sd/users', data.id]);
  }

  handleUnitSelected(data) {
    console.log('handleUnitSelected ' + data);
    this.router.navigate(['/sd/units', data.id]);
  }

  handleContractSelected(data) {
    console.log('handleContractSelected ' + data);
    this.router.navigate(['/sd/contracts', data.id]);
  }


  onCreateTab(type, title) {
    this.createTab({ id: type, name: title, type: type });
  }

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
