import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseListComponent } from '../../../shared/components/list.component';
import { Service } from '../../../models';
import { ServiceService } from '../services/service';

@Component({
  selector: 'app-service-list',
  templateUrl: 'index.html'
})
export class ServiceListComponent extends BaseListComponent<Service, ServiceService> {

  constructor(route: ActivatedRoute, service: ServiceService) { 
    super(route, service);
  }
}