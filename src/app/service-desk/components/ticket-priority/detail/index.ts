import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseDetailComponent } from '../../../shared/components/detail.component';
import { TicketPriority } from '../../../models';
import { TicketPriorityService } from '../services/service';

@Component({
  selector: 'app-ticket-priority-detail',
  templateUrl: 'index.html'
})
export class TicketPriorityDetailComponent extends BaseDetailComponent<TicketPriority, TicketPriorityService> {

  constructor(route: ActivatedRoute, location: Location, router: Router, service: TicketPriorityService) {
    super(route, location, router, service);
  }

}
