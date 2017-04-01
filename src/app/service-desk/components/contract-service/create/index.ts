import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { BasicCreateComponent } from '../../../shared/components/create.component';
import { ContractService } from '../../../models';
import { ContractServiceService } from '../services/service';

@Component({
  selector: 'app-contract-service-create',
  templateUrl: 'index.html'
})
export class ContractServiceCreateComponent extends BasicCreateComponent<ContractService, ContractServiceService> {

  @Input('contractId') 
  set contractId (val) {
    this.data.contractId = val;
  }

  constructor(route: ActivatedRoute, location: Location, router: Router, service: ContractServiceService) { 
    super(ContractService, route, location, router, service);
  }

  onServiceChange(value) {
    this.data.serviceId = value;
  }

}
