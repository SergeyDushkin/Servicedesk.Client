import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { DependentlyCreateComponent } from '../../../shared/components/create.component';
import { Supplier } from '../../../models';
import { SupplierService } from '../services/service';

@Component({
  selector: 'app-supplier-create',
  templateUrl: 'index.html'
})
export class SupplierCreateComponent extends DependentlyCreateComponent<Supplier, SupplierService> {

  constructor(route: ActivatedRoute, location: Location, router: Router, service: SupplierService) { 
    super(Supplier, route, location, router, service);
  }

}
