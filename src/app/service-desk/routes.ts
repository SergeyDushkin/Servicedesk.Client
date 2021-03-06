import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,
         RouterModule } from '@angular/router';

// Pages
import { CustomerPage } from './pages/customer-page';
import { CustomersPage } from './pages/customers-page';
import { AddressPage } from './pages/address-page';
import { UserPage } from './pages/user-page';
import { UnitPage } from './pages/unit-page';
import { ContractPage } from './pages/contract-page';
import { ServicePage } from './pages/service-page';
import { ServicesPage } from './pages/services-page';
import { CompanyPage } from './pages/company-page';
import { TicketsPage } from './pages/tickets-page';
import { TicketPriorityPage } from './pages/ticket-priority-page'

const routes: Routes = [
  { path: 'sd/company', component: CompanyPage },
  { path: 'sd/customers', component: CustomersPage },
  { path: 'sd/customers/:id', component: CustomerPage },
  { path: 'sd/address/:id', component: AddressPage },
  { path: 'sd/users/:id', component: UserPage },
  { path: 'sd/units/:id', component: UnitPage },
  { path: 'sd/contracts/:id', component: ContractPage },
  { path: 'sd/services', component: ServicesPage },
  { path: 'sd/services/:id', component: ServicePage },
  { path: 'sd/tickets', component: TicketsPage },
  { path: 'sd/sla', component: TicketPriorityPage },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ServiceDeskRoutingModule { }