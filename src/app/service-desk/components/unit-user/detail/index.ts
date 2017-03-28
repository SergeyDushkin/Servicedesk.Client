import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseDetailComponent } from '../../../shared/components/detail.component';
import { UnitUser } from '../../../models';
import { UnitUserService } from '../services/service';

@Component({
  selector: 'app-unit-user-detail',
  templateUrl: 'index.html'
})
export class UnitUserDetailComponent extends BaseDetailComponent<UnitUser, UnitUserService> {

  constructor(route: ActivatedRoute, location: Location, router: Router, service: UnitUserService) {
    super(route, location, router, service);
  }

  onUserChange(value) {
    this.data.userId = value;
  }

}
