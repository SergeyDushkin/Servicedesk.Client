import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { DependentlyCreateComponent } from '../../../shared/components/create.component';
import { Service } from '../../../models';
import { ServiceService } from '../services/service';

@Component({
  selector: 'app-service-create',
  templateUrl: 'index.html'
})
export class ServiceCreateComponent extends DependentlyCreateComponent<Service, ServiceService> {

  constructor(route: ActivatedRoute, location: Location, router: Router, service: ServiceService) { 
    super(Service, route, location, router, service);
  }

}
