import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Component } from "@angular/core";

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { AppHeaderComponent } from './widgets/app-header/app-header.component';
import { MenuAsideComponent } from './widgets/menu-aside/menu-aside.component';
import { UserBoxComponent } from './widgets/user-box/user-box.component';
//import { TabBadgeComponent } from './widgets/tab-badge';

let widgets = [
  AppHeaderComponent,
  MenuAsideComponent,
  UserBoxComponent,
  //TabBadgeComponent,
];

// Components
import { HomePage } from './pages/home';

let pages = [
  HomePage
];

// External Modules
import { ServiceDeskModule } from './service-desk';

let modules = [
  ServiceDeskModule
];

@NgModule({
  declarations: [
    AppComponent,
    widgets,
    pages
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    modules,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }