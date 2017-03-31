import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseSelectComponent } from '../../../shared/components/select.component';
import { Ticket } from '../../../models';
import { TicketService } from '../services/service';

@Component({
  selector: 'app-ticket-select',
  templateUrl: 'index.html'
})
export class TicketSelectComponent extends BaseSelectComponent<Ticket, TicketService> {

  constructor(route: ActivatedRoute, service: TicketService) { 
    super(route, service);
  }
}