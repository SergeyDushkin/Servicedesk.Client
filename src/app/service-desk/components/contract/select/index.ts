import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseSelectComponent } from '../../../shared/components/select.component';
import { Contract } from '../../../models';
import { ContractService } from '../services/service';

@Component({
  selector: 'app-contract-select',
  templateUrl: 'index.html'
})
export class ContractSelectComponent extends BaseSelectComponent<Contract, ContractService> {

  constructor(route: ActivatedRoute, service: ContractService) { 
    super(route, service);
  }
}