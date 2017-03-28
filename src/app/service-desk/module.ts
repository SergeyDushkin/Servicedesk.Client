import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ServiceDeskRoutingModule } from './routes';

import { TabBadgeComponent } from '../widgets/tab-badge';

import { CustomerCreateComponent, CustomerDetailComponent, CustomerListComponent, CustomerSelectComponent, CustomerService } from './components/customer'
import { AddressCreateComponent, AddressDetailComponent, AddressListComponent, AddressSelectComponent, AddressService } from './components/address'
import { ContractCreateComponent, ContractDetailComponent, ContractListComponent, ContractSelectComponent, ContractService } from './components/contract'
import { ServiceCreateComponent, ServiceDetailComponent, ServiceListComponent, ServiceSelectComponent, ServiceService } from './components/service'
import { SupplierCreateComponent, SupplierDetailComponent, SupplierListComponent, SupplierSelectComponent, SupplierService } from './components/supplier'
import { UnitCreateComponent, UnitDetailComponent, UnitListComponent, UnitSelectComponent, UnitService } from './components/unit'
import { UserCreateComponent, UserDetailComponent, UserListComponent, UserSelectComponent, UserService } from './components/user'
import { UnitUserCreateComponent, UnitUserDetailComponent, UnitUserListComponent, UnitUserSelectComponent, UnitUserService } from './components/unit-user'

let components = [
    TabBadgeComponent,
    CustomerCreateComponent, CustomerDetailComponent, CustomerListComponent, CustomerSelectComponent, 
    AddressCreateComponent, AddressDetailComponent, AddressListComponent, AddressSelectComponent, 
    ContractCreateComponent, ContractDetailComponent, ContractListComponent, ContractSelectComponent,
    ServiceCreateComponent, ServiceDetailComponent, ServiceListComponent, ServiceSelectComponent, 
    SupplierCreateComponent, SupplierDetailComponent, SupplierListComponent, SupplierSelectComponent, 
    UnitCreateComponent, UnitDetailComponent, UnitListComponent, UnitSelectComponent, 
    UserCreateComponent, UserDetailComponent, UserListComponent, UserSelectComponent, 
    UnitUserCreateComponent, UnitUserDetailComponent, UnitUserListComponent, UnitUserSelectComponent, 
];

import { CustomerPage } from './pages/customer-page'
import { CustomersPage } from './pages/customers-page'
import { AddressPage } from './pages/address-page'
import { UserPage } from './pages/user-page'
import { UnitPage } from './pages/unit-page'
import { ContractPage } from './pages/contract-page'
import { ServicePage } from './pages/service-page'
import { ServicesPage } from './pages/services-page'
import { CompanyPage } from './pages/company-page'

let pages = [
  CustomerPage, CustomersPage,
  AddressPage,
  UserPage,
  UnitPage,
  ContractPage,
  ServicePage, ServicesPage,
  CompanyPage
];


import { ApiService } from './shared/services/api.service';

let services = [
  ApiService, 
  CustomerService,
  AddressService,
  ContractService, ServiceService, SupplierService, UnitService, UserService,
  UnitUserService,
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
