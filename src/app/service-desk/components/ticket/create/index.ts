import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { DependentlyCreateComponent } from '../../../shared/components/create.component';
import { Ticket } from '../../../models';
import { TicketService } from '../services/service';

@Component({
  selector: 'app-ticket-create',
  templateUrl: 'index.html',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketCreateComponent extends DependentlyCreateComponent<Ticket, TicketService> {

  constructor(route: ActivatedRoute, location: Location, router: Router, service: TicketService) { 
    super(Ticket, route, location, router, service);
  }

  handleServiceSelected(value) {
    this.data.serviceId = value;
  }

}
