import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseDetailComponent } from '../../../shared/components/detail.component';
import { Ticket } from '../../../models';
import { TicketService } from '../services/service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: 'index.html'
})
export class TicketDetailComponent extends BaseDetailComponent<Ticket, TicketService> {

  constructor(route: ActivatedRoute, location: Location, router: Router, service: TicketService) {
    super(route, location, router, service);
  }

}
