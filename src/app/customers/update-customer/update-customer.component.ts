import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, Customer } from 'src/app/core/api.service';
import { switchMap } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss'],
})
export class UpdatecustomerComponent implements OnInit {
  customer: Customer | null = null;

  editCustomerForm = new FormGroup({
    firstName: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(200),
      ],
    }),
    lastName: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(200),
      ],
    }),
    phone: new FormControl('', {
      validators: [Validators.minLength(9), Validators.maxLength(20)],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
  });

  constructor(
    private api: ApiService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap
      .pipe(
        switchMap((params) => {
          const id = params.get('id') as string;
          return this.api.getOneCustomer(id);
        })
      )
      .subscribe({
        next: (data: Customer) => {
          this.customer = data;
          const firstName = data.firstName || '';
          const lastName = data.lastName || '';
          const email = data.email || '';
          const phone = data.phone || '';

          this.editCustomerForm.get('firstName')?.setValue(firstName);
          this.editCustomerForm.get('lastName')?.setValue(lastName);
          this.editCustomerForm.get('email')?.setValue(email);
          this.editCustomerForm.get('phone')?.setValue(phone);
        },
        error: (err) => console.log(err),
      });
  }

  onSubmit() {
    if (this.editCustomerForm.invalid || !this.customer?._id) {
      return;
    }

    this.api
      .updateDetails(this.customer?._id, this.editCustomerForm.value)
      .subscribe({
        next: (data: Customer) => {
          this.router.navigate(['customers']);
        },
        error: (err) => console.log(err),
      });
  }
}
