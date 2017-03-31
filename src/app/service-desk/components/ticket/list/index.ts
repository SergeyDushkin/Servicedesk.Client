import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseListComponent } from '../../../shared/components/list.component';
import { Ticket } from '../../../models';
import { TicketService } from '../services/service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: 'index.html'
})
export class TicketListComponent extends BaseListComponent<Ticket, TicketService> {

  constructor(route: ActivatedRoute, service: TicketService) { 
    super(route, service);
  }
}