import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

import { Customer } from '../../../models';
import { ApiService } from '../../../shared/services/api.service';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class CustomerService extends BaseService<Customer> {

  constructor(private apiService : ApiService) { 
    super(Customer, apiService, 'customers/');
  }

}