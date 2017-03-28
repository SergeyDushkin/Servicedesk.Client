import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { BasicCreateComponent } from '../../../shared/components/create.component';
import { UnitUser } from '../../../models';
import { UnitUserService } from '../services/service';

@Component({
  selector: 'app-unit-user-create',
  templateUrl: 'index.html'
})
export class UnitUserCreateComponent extends BasicCreateComponent<UnitUser, UnitUserService> {

  @Input('unitId') 
  set unitId (val) {
    this.data.unitId = val;
  }

  constructor(route: ActivatedRoute, location: Location, router: Router, service: UnitUserService) { 
    super(UnitUser, route, location, router, service);
  }

  onUserChange(value) {
    this.data.userId = value;
  }

}
