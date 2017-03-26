import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseListComponent } from '../../../shared/components/list.component';
import { Unit } from '../../../models';
import { UnitService } from '../services/service';

@Component({
  selector: 'app-unit-list',
  templateUrl: 'index.html'
})
export class UnitListComponent extends BaseListComponent<Unit, UnitService> {

  constructor(route: ActivatedRoute, service: UnitService) { 
    super(route, service);
  }
}