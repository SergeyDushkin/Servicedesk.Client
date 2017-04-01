import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

import { BaseTabPage } from '../../shared/pages/base-tab-page';

@Component({
  selector: 'app-ticket-priority-page',
  templateUrl: 'index.html'
})
export class TicketPriorityPage extends BaseTabPage implements OnInit {

  tabs = [
    { id: 0, type: 'app-ticket-priority-list', refresh: new Subject<void>(), count: 0, title: 'Главная' },
  ];

  constructor(private route: ActivatedRoute, private location: Location, private router: Router) { 
    super();
  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.init();
    });
  }

  handleServiceSelected(data) {
    console.log('handleServiceSelected ' + data);
    this.router.navigate([data.id], { relativeTo: this.route });
  }

}
