import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseSelectComponent } from '../../../shared/components/select.component';
import { Supplier } from '../../../models';
import { SupplierService } from '../services/service';

@Component({
  selector: 'app-supplier-select',
  templateUrl: 'index.html'
})
export class SupplierSelectComponent extends BaseSelectComponent<Supplier, SupplierService> {

  constructor(route: ActivatedRoute, service: SupplierService) { 
    super(route, service);
  }
}