import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService, Customer } from 'src/app/core/api.service';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.scss'],
})
export class CustomersPageComponent implements OnInit {
  showForm = false;

  showNotification = false;

  customers: Array<Customer> = [];

  customersForm = new FormGroup({
    firstName: new FormControl('', {
      validators: [Validators.required],
    }),
    lastName: new FormControl('', {
      validators: [Validators.required],
    }),
    phone: new FormControl('', {
      validators: [Validators.required],
    }),

    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
  });

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getAllCustomers();
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  getAllCustomers() {
    this.api.getCustomer().subscribe({
      next: (data: Array<Customer>) => (this.customers = data),
      error: (err) => console.log(err),
    });
  }

  notificationClosed(state: boolean) {
    this.showNotification = state;
    this.showForm = false;
  }

  onSubmit() {
    if (this.customersForm.invalid) {
      return;
    }

    this.api.addCustomer(this.customersForm.value).subscribe({
      next: (data: Customer) => {
        this.customersForm.reset();
        this.getAllCustomers();
        this.showNotification = true;
      },
      error: (err) => console.log(err),
    });
  }
  deletecustomer(customer: Customer) {
    if (!customer._id) {
      return;
    }
    this.api.deleteCustomer(customer._id).subscribe({
      next: (data: Customer) => this.getAllCustomers(),
      error: (err) => console.log(err),
    });
  }
}
