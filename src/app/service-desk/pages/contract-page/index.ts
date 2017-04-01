import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

import { BaseTabPage } from "app/service-desk/shared/pages/base-tab-page";

@Component({
  selector: 'app-contract-page',
  templateUrl: 'index.html'
})
export class ContractPage extends BaseTabPage implements OnInit {

  tabs = [
    { id: 0, type: 'app-contract-detail', title: 'Главная' },
    { id: 1, type: 'app-contract-service-list', refresh: new Subject<void>(), removeSelected: new Subject<void>(), count: 0, title: 'Услуги' },
  ];

  constructor(private route: ActivatedRoute, private location: Location, private router: Router) { 
    super();
  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.init();
    });
  }

}
