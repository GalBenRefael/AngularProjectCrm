import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { UpdatecustomerComponent } from './update-customer/update-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CustomersPageComponent,
    UpdatecustomerComponent,
    ViewCustomerComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterLink, SharedModule],
})
export class CustomersModule {}
