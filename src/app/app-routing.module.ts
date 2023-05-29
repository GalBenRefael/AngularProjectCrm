import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { SignupPageComponent } from './auth/signup-page/signup-page.component';
import { CustomersPageComponent } from './customers/customers-page/customers-page.component';
import { UpdatecustomerComponent } from './customers/update-customer/update-customer.component';
import { ViewCustomerComponent } from './customers/view-customer/view-customer.component';

import { EmployeesPageComponent } from './employees/employees-page/employees-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'customers', component: CustomersPageComponent },
  { path: 'update/:id', component: UpdatecustomerComponent },
  { path: 'viewCustomer/:id', component: ViewCustomerComponent },
  { path: 'employees', component: EmployeesPageComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
