import { Injectable } from '@angular/core';

import { ContractService } from '../../../models';
import { ApiService } from '../../../shared/services/api.service';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class ContractServiceService extends BaseService<ContractService> {

  constructor(private apiService : ApiService) { 
    super(ContractService, apiService, 'contract-service/');
  }
}