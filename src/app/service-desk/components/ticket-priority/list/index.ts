import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseListComponent } from '../../../shared/components/list.component';
import { TicketPriority } from '../../../models';
import { TicketPriorityService } from '../services/service';

@Component({
  selector: 'app-ticket-priority-list',
  templateUrl: 'index.html'
})
export class TicketPriorityListComponent extends BaseListComponent<TicketPriority, TicketPriorityService> {

  constructor(route: ActivatedRoute, service: TicketPriorityService) { 
    super(route, service);
  }
}