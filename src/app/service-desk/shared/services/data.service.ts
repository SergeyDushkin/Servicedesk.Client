import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { IIdentifiable, PageResult } from '../model';

export interface IDataService<T extends IIdentifiable> {
  get() : Observable<PageResult<T>>;
  get(params: IApiClientRequestOptions) : Observable<PageResult<T>>;

  getById(params: IApiClientRequestOptions) : Observable<T>;

  create(create : T) : Observable<Response>;
  create(create : T, params: IApiClientRequestOptions) : Observable<Response>;

  update(update : T) : Observable<Response>;
  update(update : T, params: IApiClientRequestOptions) : Observable<Response>;

  delete(params: IApiClientRequestOptions) : Observable<Response>;
}

export interface IApiClientRequestOptions {
  id?: string,
  reference?: string,
  params?: any,
  page?: number,
  results?: number
}