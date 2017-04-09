import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { UnitService } from '../../../models';
import { ApiService } from '../../../shared/services/api.service';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class UnitServiceService extends BaseService<UnitService> {

  constructor(private apiService : ApiService) { 
    super(UnitService, apiService, 'unit-service/');
  }

  getUnit = (serviceId) : Observable<UnitService> =>
    this.api.get(this.urlBuilder.create().addSegment('unit').addParams({ serviceId: serviceId }).toString())
      .map(r => r.json())
      .map(item => this.extractData(this.ctor, item));
}