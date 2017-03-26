import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { DependentlyCreateComponent } from '../../../shared/components/create.component';
import { User } from '../../../models';
import { UserService } from '../services/service';

@Component({
  selector: 'app-user-create',
  templateUrl: 'index.html'
})
export class UserCreateComponent extends DependentlyCreateComponent<User, UserService> {

  constructor(route: ActivatedRoute, location: Location, router: Router, service: UserService) { 
    super(User, route, location, router, service);
  }

}
