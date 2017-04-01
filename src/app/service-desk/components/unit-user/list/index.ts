import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseListComponent } from '../../../shared/components/list.component';
import { UnitUser } from '../../../models';
import { UnitUserService } from '../services/service';

@Component({
  selector: 'app-unit-user-list',
  templateUrl: 'index.html'
})
export class UnitUserListComponent extends BaseListComponent<UnitUser, UnitUserService> {

  @Input('unitId') 
  set unitId(val) {
    this.filter = { unitId: val, include: 'user' };
  }

  constructor(route: ActivatedRoute, service: UnitUserService) { 
    super(route, service);
  }

}