import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseListComponent } from '../../../shared/components/list.component';
import { Supplier } from '../../../models';
import { SupplierService } from '../services/service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: 'index.html'
})
export class SupplierListComponent extends BaseListComponent<Supplier, SupplierService> {

  constructor(route: ActivatedRoute, service: SupplierService) { 
    super(route, service);
  }
}