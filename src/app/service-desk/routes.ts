import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,
         RouterModule } from '@angular/router';

// Components
import { CustomerPage } from './pages/customer-page';

const routes: Routes = [
  { path: 'sd/customers', component: CustomerPage },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ServiceDeskRoutingModule { }