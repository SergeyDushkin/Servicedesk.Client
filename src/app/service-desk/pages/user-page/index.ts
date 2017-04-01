import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { BaseTabPage } from "app/service-desk/shared/pages/base-tab-page";

@Component({
  selector: 'app-user-page',
  templateUrl: 'index.html'
})
export class UserPage extends BaseTabPage implements OnInit {

  tabs = [
    { id: 0, type: 'app-user-detail', title: 'Главная' },
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

}
