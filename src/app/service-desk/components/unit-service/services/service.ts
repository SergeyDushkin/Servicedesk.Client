import { Injectable } from '@angular/core';

import { UnitService } from '../../../models';
import { ApiService } from '../../../shared/services/api.service';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class UnitServiceService extends BaseService<UnitService> {

  constructor(private apiService : ApiService) { 
    super(UnitService, apiService, 'unit-service/');
  }
}