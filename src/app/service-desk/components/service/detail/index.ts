import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseDetailComponent } from '../../../shared/components/detail.component';
import { Service } from '../../../models';
import { ServiceService } from '../services/service';

@Component({
  selector: 'app-service-detail',
  templateUrl: 'index.html'
})
export class ServiceDetailComponent extends BaseDetailComponent<Service, ServiceService> {

  constructor(route: ActivatedRoute, location: Location, router: Router, service: ServiceService) {
    super(route, location, router, service);
  }

}
