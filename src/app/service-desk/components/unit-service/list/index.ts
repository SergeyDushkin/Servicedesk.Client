import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseListComponent } from '../../../shared/components/list.component';
import { UnitService } from '../../../models';
import { UnitServiceService } from '../services/service';

@Component({
  selector: 'app-unit-service-list',
  templateUrl: 'index.html'
})
export class UnitServiceListComponent extends BaseListComponent<UnitService, UnitServiceService> {

  @Input('unitId') 
  set unitId(val) {
    this.filter = { unitId: val, include: 'service' };
  }

  constructor(route: ActivatedRoute, service: UnitServiceService) { 
    super(route, service);
  }

}