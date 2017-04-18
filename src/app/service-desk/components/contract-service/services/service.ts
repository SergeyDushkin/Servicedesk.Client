import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { ContractService } from '../../../models';
import { ApiService } from '../../../shared/services/api.service';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class ContractServiceService extends BaseService<ContractService> {

  constructor(private apiService : ApiService) { 
    super(ContractService, apiService, 'contract-service/');
  }

  getContract = (serviceId) : Observable<ContractService> =>
    this.api.get(this.urlBuilder.create().addSegment('contract').addParams({ serviceId: serviceId }).toString())
      .map(r => r.json())
      .map(item => this.extractData(this.ctor, item));
}