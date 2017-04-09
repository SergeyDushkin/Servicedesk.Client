import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

import { IIdentifiable, PageResult } from '../model';
import { ApiService } from './api.service';
import { IDataService, IApiClientRequestOptions } from './data.service';

@Injectable()
export class BaseService<T extends IIdentifiable> implements IDataService<T> {

  urlBuilder : UrlBuilder;

  constructor(protected ctor: ParameterlessConstructor<T>, protected api : ApiService, url : string) { 
    this.urlBuilder = new UrlBuilder(url);
  }

  get = (options: IApiClientRequestOptions = { page: 1, results: 100 }) : Observable<PageResult<T>> => 
    this.api.get(this.urlBuilder.create(options.reference).addParams(options.params).toString())
      .map(r => {
        let count = r.headers.get('X-Total-Count');
        let data = r.json().map(i => this.extractData(this.ctor, i));

        return new PageResult(data, Number.parseInt(count));
      });

  getById = (options: IApiClientRequestOptions) : Observable<T> =>
    this.api.get(this.urlBuilder.create(options.reference).addIdentity(options.id).toString())
      .map(r => r.json())
      .map(item => this.extractData(this.ctor, item));

  create = (create : T, options: IApiClientRequestOptions = {}) : Observable<Response> =>
    this.api.post(this.urlBuilder.create(options.reference).toString(), create);

  update = (update : T, options: IApiClientRequestOptions = {}) : Observable<Response> =>
    this.api.put(this.urlBuilder.create(options.reference).addIdentity(update.id).toString(), update);

  delete = (options: IApiClientRequestOptions) : Observable<Response> =>
    this.api.delete(this.urlBuilder.create(options.reference).addIdentity(options.id).toString());

  extractData = (ctor: ParameterlessConstructor<T>, item : any) : T => new ctor(item);
  
  extractSpecificData<TType extends IIdentifiable>(ctor: ParameterlessConstructor<TType>, item : any) : TType { 
    return new ctor(item);
  }
}

interface ParameterlessConstructor<T> {
    new(): T;
}

interface ParameterlessConstructor<T> {
    new(params): T;
}


class Factory<T> {
    constructor(private ctor: ParameterlessConstructor<T>) {

    }
    create() {
        return new this.ctor();
    }
}

class UrlBuilder {

  private url: string;
  private identity: string;
  private segments: string[] = new Array<string>();
  private params: any;

  constructor(url : string) { 
    this.url = url;
  }

  public create(opt = null) : UrlBuilder {
    if (opt) {
      return new UrlBuilder(this.format(this.url, opt))
    }
    return new UrlBuilder(this.url);
  }

  public addSegment(segment: string) : UrlBuilder {
    if (segment) {
      this.segments.push(segment);
    }
    return this;
  }

  public addIdentity(id: string) : UrlBuilder {
    this.identity = id;
    return this;
  }

  public addParams(params: any) : UrlBuilder {
    this.params = params;
    return this;
  }

  public toString = () => this.url + this.segments.join('/') + (this.identity || "") + (this.params ? "?" + this.serialize(this.params) : ""); 

  serialize = function(obj: any) {
    var str = [];
    for(var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }

  format = function (...strings: string[]) {
      // The string containing the format items (e.g. "{0}")
      // will and always has to be the first argument.
      var str = arguments[0];

      // start with the second argument (i = 1)
      for (var i = 1; i < arguments.length; i++) {
          // "gm" = RegEx options for Global search (more than one instance)
          // and for Multiline search
          var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
          str = str.replace(regEx, arguments[i]);
      }

      return str;
  }
}