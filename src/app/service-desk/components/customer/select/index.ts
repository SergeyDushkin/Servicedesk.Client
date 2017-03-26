import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseSelectComponent } from '../../../shared/components/select.component';
import { Customer } from '../../../models';
import { CustomerService } from '../services/service';

@Component({
  selector: 'app-customer-select',
  templateUrl: 'index.html'
})
export class CustomerSelectComponent extends BaseSelectComponent<Customer, CustomerService> {

  constructor(route: ActivatedRoute, service: CustomerService) { 
    super(route, service);
  }
}