import { Component, OnInit } from '@angular/core';
//import {Profile} from "../../models/profile";
import {Router} from "@angular/router";
//import {ProfileService} from "../../services/profile.service";

@Component({
  selector: 'menu-aside',
  templateUrl: 'menu-aside.component.html'
})
export class MenuAsideComponent implements OnInit {
//  private current_user: Profile = new Profile();
  private current_url: string;
  links: Array<any> = [{
      "title": "Заявки",
      "icon": "table",
      "link": ['/sd/tickets'],
      "access": () => true
    },
    {
      "title": "Моя компания",
      "icon": "users",
      "link": ['/sd/company'],
      "access": () => true
    },
    {
      "title": "Клиенты",
      "icon": "child",
      "link": ['/sd/customers'],
      "access": () => true
    },
    {
      "title": "Услуги",
      "icon": "cube",
      "link": ['/sd/services'],
      "access": () => true
    },/*
    {
      "title": "Суточные отчеты",
      "icon": "table",
      "link": ['/reports'],
      "access": () => true
    },
    {
      "title": "ДТПК",
      "icon": "cubes",
      "link": ['/documents'],
      "access": () => true
    },
    {
      "title": "СИ",
      "icon": "university",
      "link": ['/speciality'],
      "access": () => true
    },
    {
      "title": "Пользователи",
      "icon": "users",
      "link": ['/users'],
      "access": () => true
//      "access": () => this.current_user.hasClaim('feature:user:view')
     }*/
  ];

//  constructor(
//    private _user_serv : ProfileService,
//    public router: Router ){
    //recuperation de l'url courrante
//    this.router.events.subscribe((evt) => this.current_url = evt.url );

    //se connecter au modification du user courant
//    this._user_serv.current_user.subscribe((user: Profile) => this.current_user = user);

 // }

  ngOnInit() {}
}
