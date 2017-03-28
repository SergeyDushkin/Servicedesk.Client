import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseListComponent } from '../../../shared/components/list.component';
import { UnitUser } from '../../../models';
import { UnitUserService } from '../services/service';

@Component({
  selector: 'app-unit-user-list',
  templateUrl: 'index.html'
})
export class UnitUserListComponent extends BaseListComponent<UnitUser, UnitUserService> {

  constructor(route: ActivatedRoute, service: UnitUserService) { 
    super(route, service);
  }
}