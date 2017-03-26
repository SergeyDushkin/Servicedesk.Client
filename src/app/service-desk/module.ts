import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ServiceDeskRoutingModule } from './routes';

import { TabBadgeComponent } from '../widgets/tab-badge';

import { CustomerCreateComponent, CustomerDetailComponent, CustomerListComponent, CustomerSelectComponent, CustomerService } from './components/customer'

let components = [
    TabBadgeComponent,
    CustomerCreateComponent, CustomerDetailComponent, CustomerListComponent, CustomerSelectComponent, 
];

import { CustomerPage } from './pages/customer-page'

let pages = [
  CustomerPage,
];


import { ApiService } from './shared/services/api.service';

let services = [
  ApiService, 
  CustomerService,
];

@NgModule({
  imports: [ CommonModule, FormsModule, ServiceDeskRoutingModule ],
  declarations: [ components, pages ],
  providers: [
    ...services
  ],
  exports: [ components, pages ]
})
export class ServiceDeskModule { }
