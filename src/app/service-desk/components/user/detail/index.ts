import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseDetailComponent } from '../../../shared/components/detail.component';
import { User } from '../../../models';
import { UserService } from '../services/service';

@Component({
  selector: 'app-user-detail',
  templateUrl: 'index.html'
})
export class UserDetailComponent extends BaseDetailComponent<User, UserService> {

  constructor(route: ActivatedRoute, location: Location, router: Router, service: UserService) {
    super(route, location, router, service);
  }

}
