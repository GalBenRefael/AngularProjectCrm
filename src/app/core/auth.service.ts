import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  redirectUrl = 'home';

  constructor(private api: ApiService, private router: Router) {}

  isLoggedIn(): boolean {
    const token = this.api.getToken();
    return token && token.length > 0 ? true : false;
  }
}
