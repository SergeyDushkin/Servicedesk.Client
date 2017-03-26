import { Component, OnInit } from '@angular/core';
//import { AuthenticationService } from "../../services/authentication.service";
//import { ProfileService } from "../../services/profile.service";
//import { Profile } from "../../models/profile";

@Component({
  selector: 'app-header',
  templateUrl: 'app-header.component.html'
})
export class AppHeaderComponent implements OnInit {

//  private isAuthenticated: boolean;
//  private profile: Profile;

//  constructor(private authenticationService : AuthenticationService, private profileService : ProfileService) {
//    this.isAuthenticated = false;
//    this.profile = new Profile();
//  }

  ngOnInit() {
    //this.authenticationService.isAuthenticated.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
    //this.profileService.current_user.subscribe(profile => this.profile = profile);
  }

}
