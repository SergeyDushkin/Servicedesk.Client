import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseDetailComponent } from '../../../shared/components/detail.component';
import { Address } from '../../../models';
import { AddressService } from '../services/service';

@Component({
  selector: 'app-address-detail',
  templateUrl: 'index.html'
})
export class AddressDetailComponent extends BaseDetailComponent<Address, AddressService> {

  constructor(route: ActivatedRoute, location: Location, router: Router, service: AddressService) {
    super(route, location, router, service);
  }

}
