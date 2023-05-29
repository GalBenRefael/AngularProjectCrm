import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeesPageComponent],
  imports: [CommonModule, FormsModule],
})
export class EmployeesModule {}
