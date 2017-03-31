import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseListComponent } from '../../../shared/components/list.component';
import { User } from '../../../models';
import { UnitUserReadonlyService } from '../services/service';

@Component({
  selector: 'app-unit-user-list',
  templateUrl: 'index.html'
})
export class UnitUserListComponent extends BaseListComponent<User, UnitUserReadonlyService> {

  @Input('unitId') 
  set unitId(val) {
    this.filter = { unitId: val };
  }

  constructor(route: ActivatedRoute, service: UnitUserReadonlyService) { 
    super(route, service);
  }

}