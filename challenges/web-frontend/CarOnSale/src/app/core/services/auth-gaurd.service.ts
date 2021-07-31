import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router:Router, private authService: AuthenticationService, private commonService: CommonService ) {
 
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean|UrlTree {

      if (!this.authService.isUserLoggedIn()) {
          this.commonService.openDialog({title: 'Sorry!', message: 'You are not allowed to view this page. You are redirected to login Page.'})
          this.router.navigate(["login"]);
          return false;
      } 

      return true;
  }
}
