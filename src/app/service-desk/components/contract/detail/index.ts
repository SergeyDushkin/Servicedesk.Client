import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseDetailComponent } from '../../../shared/components/detail.component';
import { Contract } from '../../../models';
import { ContractService } from '../services/service';

@Component({
  selector: 'app-contract-detail',
  templateUrl: 'index.html'
})
export class ContractDetailComponent extends BaseDetailComponent<Contract, ContractService> {

  constructor(route: ActivatedRoute, location: Location, router: Router, service: ContractService) {
    super(route, location, router, service);
  }

}
