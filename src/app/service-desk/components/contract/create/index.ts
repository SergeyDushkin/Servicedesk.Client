import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { DependentlyCreateComponent } from '../../../shared/components/create.component';
import { Contract } from '../../../models';
import { ContractService } from '../services/service';

@Component({
  selector: 'app-contract-create',
  templateUrl: 'index.html'
})
export class ContractCreateComponent extends DependentlyCreateComponent<Contract, ContractService> {

  constructor(route: ActivatedRoute, location: Location, router: Router, service: ContractService) { 
    super(Contract, route, location, router, service);
  }

}
