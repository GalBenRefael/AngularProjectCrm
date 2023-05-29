import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss'],
})
export class EmployeesPageComponent implements OnInit {
  employees = [
    {
      name: 'John Smith',
      email: 'john.smith@gmail.com',
      phone: '052-555-1234',
      birthday: 'January 1, 1980',
    },
    {
      name: 'Jane Doe',
      email: 'jane.doe@walla.com',
      phone: '058-555-5678',
      birthday: 'February 14, 1990',
    },
    {
      name: 'Bob Johnson',
      email: 'bob.johnson@hotmail.com',
      phone: '054-555-9012',
      birthday: 'March 30, 1975',
    },
    {
      name: 'Emily Williams',
      email: 'emily.williams@protonmail.com',
      phone: '050-555-3456',
      birthday: 'May 15, 1985',
    },
    {
      name: 'Mike Brown',
      email: 'mike.brown@test.com',
      phone: '052-555-7890',
      birthday: 'July 4, 1995',
    },
  ];

  searchTerm = '';
  filteredData: any = [];

  ngOnInit(): void {
    this.filteredData = this.employees;
  }

  onSearch() {
    if (this.filteredData === '') {
      this.filteredData = this.employees;
    } else {
      this.filteredData = this.employees.filter((employee) =>
        employee.name?.toLowerCase().includes(this.searchTerm)
      );
    }
  }
}
