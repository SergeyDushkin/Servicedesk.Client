import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseDetailComponent } from '../../../shared/components/detail.component';
import { Unit } from '../../../models';
import { UnitService } from '../services/service';

@Component({
  selector: 'app-unit-detail',
  templateUrl: 'index.html'
})
export class UnitDetailComponent extends BaseDetailComponent<Unit, UnitService> {

  constructor(route: ActivatedRoute, location: Location, router: Router, service: UnitService) {
    super(route, location, router, service);
  }

}
