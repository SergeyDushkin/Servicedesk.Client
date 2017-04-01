import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseSelectComponent } from '../../../shared/components/select.component';
import { ContractService } from '../../../models';
import { ContractServiceService } from '../services/service';

@Component({
  selector: 'app-contract-service-select',
  templateUrl: 'index.html'
})
export class ContractServiceSelectComponent extends BaseSelectComponent<ContractService, ContractServiceService> {

  constructor(route: ActivatedRoute, service: ContractServiceService) { 
    super(route, service);
  }
}