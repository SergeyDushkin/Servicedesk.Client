import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { BasicCreateComponent } from '../../../shared/components/create.component';
import { UnitService } from '../../../models';
import { UnitServiceService } from '../services/service';

@Component({
  selector: 'app-unit-service-create',
  templateUrl: 'index.html'
})
export class UnitServiceCreateComponent extends BasicCreateComponent<UnitService, UnitServiceService> {

  @Input('unitId') 
  set unitId (val) {
    this.data.unitId = val;
  }

  constructor(route: ActivatedRoute, location: Location, router: Router, service: UnitServiceService) { 
    super(UnitService, route, location, router, service);
  }

  onServiceChange(value) {
    this.data.serviceId = value;
  }

}
