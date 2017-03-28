import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

import { BaseTabPage } from '../../shared/pages/base-tab-page';

@Component({
  selector: 'app-company-page',
  templateUrl: 'index.html'
})
export class CompanyPage extends BaseTabPage implements OnInit {

  tabs = [
    { id: 0, type: 'app-user-list', refresh: new Subject<void>(), count: 0, title: 'Сотрудники' },
    { id: 1, type: 'app-unit-list', refresh: new Subject<void>(), count: 0, title: 'Орг. структура' },
  ];

  constructor(private route: ActivatedRoute, private location: Location, private router: Router) { 
    super();
  }

  ngOnInit() {
    this.init();
  }
  
  handleUserSelected(data) {
    console.log('handleUserSelected ' + data);
    this.router.navigate(['/sd/users', data.id]);
  }

  handleUnitSelected(data) {
    console.log('handleUnitSelected ' + data);
    this.router.navigate(['/sd/units', data.id]);
  }

}
