import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseSelectComponent } from '../../../shared/components/select.component';
import { UnitService } from '../../../models';
import { UnitServiceService } from '../services/service';

@Component({
  selector: 'app-unit-service-select',
  templateUrl: 'index.html'
})
export class UnitServiceSelectComponent extends BaseSelectComponent<UnitService, UnitServiceService> {

  constructor(route: ActivatedRoute, service: UnitServiceService) { 
    super(route, service);
  }
}