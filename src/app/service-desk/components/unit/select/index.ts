import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseSelectComponent } from '../../../shared/components/select.component';
import { Unit } from '../../../models';
import { UnitService } from '../services/service';

@Component({
  selector: 'app-unit-select',
  templateUrl: 'index.html'
})
export class UnitSelectComponent extends BaseSelectComponent<Unit, UnitService> {

  constructor(route: ActivatedRoute, service: UnitService) { 
    super(route, service);
  }
}