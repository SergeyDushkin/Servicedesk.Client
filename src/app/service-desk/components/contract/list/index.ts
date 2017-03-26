import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseListComponent } from '../../../shared/components/list.component';
import { Contract } from '../../../models';
import { ContractService } from '../services/service';

@Component({
  selector: 'app-contract-list',
  templateUrl: 'index.html'
})
export class ContractListComponent extends BaseListComponent<Contract, ContractService> {

  constructor(route: ActivatedRoute, service: ContractService) { 
    super(route, service);
  }
}