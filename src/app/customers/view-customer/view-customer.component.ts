import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiService, Customer } from 'src/app/core/api.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss'],
})
export class ViewCustomerComponent implements OnInit {
  customers: Customer | null = null;

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
          this.customers = data;
        },
        error: (err) => console.log(err),
      });
  }
}
