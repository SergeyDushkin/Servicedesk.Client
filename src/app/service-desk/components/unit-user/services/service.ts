import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

import { UnitUser, User } from '../../../models';
import { ApiService } from '../../../shared/services/api.service';
import { BaseService } from '../../../shared/services/base.service';
import { IApiClientRequestOptions } from "app/service-desk/shared/services/data.service";
import { PageResult } from "app/service-desk/shared/model";

@Injectable()
export class UnitUserService extends BaseService<UnitUser> {

  constructor(private apiService : ApiService) { 
    super(UnitUser, apiService, 'unit-user/');
  }

  getUsers = (options: IApiClientRequestOptions = { page: 1, results: 100 }) : Observable<PageResult<User>> => 
    this.apiService.get(this.urlBuilder.create('users').addParams(options.params).toString())
      .map(r => {
        let count = r.headers.get('X-Total-Count');
        let data = r.json().map(i => this.extractSpecificData(User, i));

        return new PageResult(data, Number.parseInt(count));
      });
}

@Injectable()
export class UnitUserReadonlyService extends BaseService<UnitUser> {

  constructor(private apiService : ApiService) { 
    super(UnitUser, apiService, 'unit-user/users/');
  }
  
}