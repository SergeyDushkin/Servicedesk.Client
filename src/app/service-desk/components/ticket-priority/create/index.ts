import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { BasicCreateComponent } from '../../../shared/components/create.component';
import { TicketPriority } from '../../../models';
import { TicketPriorityService } from '../services/service';

@Component({
  selector: 'app-ticket-priority-create',
  templateUrl: 'index.html'
})
export class TicketPriorityCreateComponent extends BasicCreateComponent<TicketPriority, TicketPriorityService> {

  constructor(route: ActivatedRoute, location: Location, router: Router, service: TicketPriorityService) { 
    super(TicketPriority, route, location, router, service);
  }

}
