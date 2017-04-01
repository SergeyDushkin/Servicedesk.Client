import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseListComponent } from '../../../shared/components/list.component';
import { ContractService } from '../../../models';
import { ContractServiceService } from '../services/service';

@Component({
  selector: 'app-contract-service-list',
  templateUrl: 'index.html'
})
export class ContractServiceListComponent extends BaseListComponent<ContractService, ContractServiceService> {

  @Input('contractId') 
  set contractId(val) {
    this.filter = { contractId: val, include: 'service' };
  }

  constructor(route: ActivatedRoute, service: ContractServiceService) { 
    super(route, service);
  }

}