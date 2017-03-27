import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-units-page',
  templateUrl: 'index.html'
})
export class UnitPage implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute, private location: Location, private router: Router) { 
  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.id = data['id'];
    });
  }

  handleLoaded(data) {
    console.log('handleLoaded ' + data);
  }

  handleCanceled($event, link) {
    console.log('handleLoaded ' + $event);
  }

  handleUpdated($event, link) {
    console.log('handleLoaded ' + $event);
  }
  handleDeleted($event, link) {
    console.log('handleLoaded ' + $event);
  }

}
