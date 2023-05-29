import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private route: Router,
    private api: ApiService,
    private auth: AuthService
  ) {}
  ngOnInit(): void {}

  loggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  logOut() {
    this.api.deleteToken();
    this.route.navigate(['/']);
  }
}
