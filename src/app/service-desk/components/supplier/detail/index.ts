import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseDetailComponent } from '../../../shared/components/detail.component';
import { Supplier } from '../../../models';
import { SupplierService } from '../services/service';

@Component({
  selector: 'app-supplier-detail',
  templateUrl: 'index.html'
})
export class SupplierDetailComponent extends BaseDetailComponent<Supplier, SupplierService> {

  constructor(route: ActivatedRoute, location: Location, router: Router, service: SupplierService) {
    super(route, location, router, service);
  }

}
