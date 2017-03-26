import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseListComponent } from '../../../shared/components/list.component';
import { User } from '../../../models';
import { UserService } from '../services/service';

@Component({
  selector: 'app-user-list',
  templateUrl: 'index.html'
})
export class UserListComponent extends BaseListComponent<User, UserService> {

  constructor(route: ActivatedRoute, service: UserService) { 
    super(route, service);
  }
}