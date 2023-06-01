import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  redirectUrl = 'home';

  isAuth = false;

  constructor(private api: ApiService, private router: Router) {}

  isLoggedIn(): boolean {
    const token = this.api.getToken();
    this.isAuth = true;
    return token && token.length > 0 ? true : false;
  }

  islogedOut() {
    this.api.deleteToken();
    this.isAuth = false;
    this.router.navigate(['/']);
  }
}
