import { Component, OnInit } from '@angular/core';
//import { Profile } from "../../models/profile";
//import { ProfileService } from "../../services/profile.service";
//import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: '.userBox',
  templateUrl: 'user-box.component.html'
})
export class UserBoxComponent implements OnInit {
  current_user: any;
//    current_user: Profile;

//    constructor( private _user_serv : ProfileService, private authenticationService: AuthenticationService ){
      //se connecter au modif du user courant
//      this._user_serv.current_user.subscribe((user: Profile) => this.current_user = user);
//    }

    public ngOnInit(){
      //reception des données par les services
      /*this._user_serv.current_user.subscribe((user: User)=>{
        this.current_user = user;
      });*/
    }

//    onSignOut(){
//      this.authenticationService.logout();
//    }
}
