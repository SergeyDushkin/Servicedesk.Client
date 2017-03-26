import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseListComponent } from '../../../shared/components/list.component';
import { Address } from '../../../models';
import { AddressService } from '../services/service';

@Component({
  selector: 'app-address-list',
  templateUrl: 'index.html'
})
export class AddressListComponent extends BaseListComponent<Address, AddressService> {

  constructor(route: ActivatedRoute, service: AddressService) { 
    super(route, service);
  }
}