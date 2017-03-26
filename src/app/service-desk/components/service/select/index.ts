import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseSelectComponent } from '../../../shared/components/select.component';
import { Service } from '../../../models';
import { ServiceService } from '../services/service';

@Component({
  selector: 'app-service-select',
  templateUrl: 'index.html'
})
export class ServiceSelectComponent extends BaseSelectComponent<Service, ServiceService> {

  constructor(route: ActivatedRoute, service: ServiceService) { 
    super(route, service);
  }
}