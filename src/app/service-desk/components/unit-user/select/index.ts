import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseSelectComponent } from '../../../shared/components/select.component';
import { UnitUser } from '../../../models';
import { UnitUserService } from '../services/service';

@Component({
  selector: 'app-unit-user-select',
  templateUrl: 'index.html'
})
export class UnitUserSelectComponent extends BaseSelectComponent<UnitUser, UnitUserService> {

  constructor(route: ActivatedRoute, service: UnitUserService) { 
    super(route, service);
  }
}