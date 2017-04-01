import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

import { BaseTabPage } from '../../shared/pages/base-tab-page';

@Component({
  selector: 'app-units-page',
  templateUrl: 'index.html'
})
export class UnitPage extends BaseTabPage implements OnInit {

  tabs = [
    { id: 0, type: 'app-unit-detail', title: 'Главная' },
    { id: 1, type: 'app-unit-user-list', refresh: new Subject<void>(), removeSelected: new Subject<void>(), count: 0, title: 'Сотрудники' },
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
  
  handleUnitUserSelected(data) {
    console.log('handleUnitUserSelected ' + data);
    this.router.navigate(['/sd/users', data.id]);
  }

}