import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { DependentlyCreateComponent } from '../../../shared/components/create.component';
import { Address } from '../../../models';
import { AddressService } from '../services/service';

@Component({
  selector: 'app-address-create',
  templateUrl: 'index.html'
})
export class AddressCreateComponent extends DependentlyCreateComponent<Address, AddressService> {

  constructor(route: ActivatedRoute, location: Location, router: Router, service: AddressService) { 
    super(Address, route, location, router, service);
  }

}
