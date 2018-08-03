import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RequireAnonGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Promise<any> {
    return this.authService.me()
      .then(user => {
        if (user) {
          this.router.navigate(['/profile']);
          return false;
        } else {
          return true;
        }
      })
      .catch(err => console.log(err));
  }
}