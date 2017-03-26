import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseListComponent } from '../../../shared/components/list.component';
import { Customer } from '../../../models';
import { CustomerService } from '../services/service';

@Component({
  selector: 'app-customer-list',
  templateUrl: 'index.html'
})
export class CustomerListComponent extends BaseListComponent<Customer, CustomerService> {

  constructor(route: ActivatedRoute, service: CustomerService) { 
    super(route, service);
  }
}