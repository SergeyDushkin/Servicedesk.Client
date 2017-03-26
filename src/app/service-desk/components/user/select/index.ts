import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseSelectComponent } from '../../../shared/components/select.component';
import { User } from '../../../models';
import { UserService } from '../services/service';

@Component({
  selector: 'app-user-select',
  templateUrl: 'index.html'
})
export class UserSelectComponent extends BaseSelectComponent<User, UserService> {

  constructor(route: ActivatedRoute, service: UserService) { 
    super(route, service);
  }
}