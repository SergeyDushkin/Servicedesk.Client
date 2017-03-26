import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseDetailComponent } from '../../../shared/components/detail.component';
import { Customer } from '../../../models';
import { CustomerService } from '../services/service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: 'index.html'
})
export class CustomerDetailComponent extends BaseDetailComponent<Customer, CustomerService> {

  constructor(route: ActivatedRoute, location: Location, router: Router, service: CustomerService) {
    super(route, location, router, service);
  }

}
