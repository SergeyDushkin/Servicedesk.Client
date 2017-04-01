import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseSelectComponent } from '../../../shared/components/select.component';
import { TicketPriority } from '../../../models';
import { TicketPriorityService } from '../services/service';

@Component({
  selector: 'app-ticket-priority-select',
  templateUrl: 'index.html'
})
export class TicketPrioritySelectComponent extends BaseSelectComponent<TicketPriority, TicketPriorityService> {

  constructor(route: ActivatedRoute, service: TicketPriorityService) { 
    super(route, service);
  }
}