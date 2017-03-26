import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { DependentlyCreateComponent } from '../../../shared/components/create.component';
import { Unit } from '../../../models';
import { UnitService } from '../services/service';

@Component({
  selector: 'app-unit-create',
  templateUrl: 'index.html'
})
export class UnitCreateComponent extends DependentlyCreateComponent<Unit, UnitService> {

  constructor(route: ActivatedRoute, location: Location, router: Router, service: UnitService) { 
    super(Unit, route, location, router, service);
  }

}
