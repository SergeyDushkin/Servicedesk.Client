import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseSelectComponent } from '../../../shared/components/select.component';
import { Address } from '../../../models';
import { AddressService } from '../services/service';

@Component({
  selector: 'app-address-select',
  templateUrl: 'index.html'
})
export class AddressSelectComponent extends BaseSelectComponent<Address, AddressService> {

  constructor(route: ActivatedRoute, service: AddressService) { 
    super(route, service);
  }
}