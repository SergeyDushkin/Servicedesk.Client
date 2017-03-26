import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { DependentlyCreateComponent } from '../../../shared/components/create.component';
import { Customer } from '../../../models';
import { CustomerService } from '../services/service';

@Component({
  selector: 'app-customer-create',
  templateUrl: 'index.html'
})
export class CustomerCreateComponent extends DependentlyCreateComponent<Customer, CustomerService> {

  constructor(route: ActivatedRoute, location: Location, router: Router, service: CustomerService) { 
    super(Customer, route, location, router, service);
  }

}
