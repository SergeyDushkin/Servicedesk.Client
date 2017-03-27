import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-services-page',
  templateUrl: 'index.html'
})
export class ServicesPage implements OnInit {

  id: string;
  
  tabs = [
    { id: 0, type: 'app-service-list', refresh: new Subject<void>(), count: 0, title: 'Главная' },
  ];

  activeTab = this.tabs[0];
  prevTab = this.tabs[0];

  constructor(private route: ActivatedRoute, private location: Location, private router: Router) { 
  }

  setActiveLink(link) {
    this.prevTab = this.activeTab;
    this.activeTab = link;
  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.id = data['id'];
    });
  }

  handleLoaded(data) {
    console.log('handleLoaded ' + data);
  }

  handleCanceled($event, link) {
    console.log('handleCanceled ' + $event);
    this.removeTab(link);
  }

  handleUpdated($event, link, type) {
    console.log('handleUpdated ' + $event);
    this.removeTab(link);
    //this.refresh[type].next();
  }

  onCreateTab(type, title) {
    this.createTab({ id: type, title: title, type: type });
  }

  removeTab(tab) {
    let idx = this.tabs.findIndex(r => r.id == tab['id']);
    if (idx > -1) {
      this.activeTab = this.prevTab;
      this.tabs.splice(idx, 1);
    }
  }

  createTab(tab) {

    if (!this.tabs.find(r => r.id == tab.id)) {
      this.tabs.push(tab);
    }

    this.setActiveLink(tab);
  }

}
