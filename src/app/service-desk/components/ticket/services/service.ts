import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

import { Ticket } from '../../../models';
import { ApiService } from '../../../shared/services/api.service';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class TicketService extends BaseService<Ticket> {

  constructor(private apiService : ApiService) { 
    super(Ticket, apiService, 'tickets/');
  }

}