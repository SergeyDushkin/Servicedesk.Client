import { Component, Input } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { ContractService } from '../../../models';
import { ContractServiceService } from '../services/service';

@Component({
  selector: 'app-contract-service-label',
  templateUrl: 'index.html'
})
export class ContractServiceLabelComponent {

  private data = new BehaviorSubject<ContractService>({} as ContractService);

  @Input('serviceId') 
  set serviceId (val) {
    //this.refresh(val);
  }

  constructor(private service: ContractServiceService) { 
  }

  //refresh(value) {
  //  this.service.getById({ serviceId: value })
  //    .subscribe(r => {
  //      this.data.next(r);
  //    });
  //}

}
