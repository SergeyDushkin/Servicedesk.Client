import { Component, Input } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { ContractService } from '../../../models';
import { ContractServiceService } from '../services/service';

@Component({
  selector: 'app-contract-service-label',
  templateUrl: 'index.html'
})
export class ContractServiceLabelComponent {

  data: ContractService = ({} as ContractService);

  @Input('serviceId') 
  set serviceId (val) {
    this.refresh(val);
  }

  constructor(private service: ContractServiceService) { 
  }

  refresh(value) {
    if (!value) return;
    this.service.getContract(value).subscribe(r => this.data = r, r => this.data = {} as ContractService);
  }

}
