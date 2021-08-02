import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public get isUserLoggedIn() {
    if(sessionStorage.getItem('authToken')){
      return true;
    } else {
      return false;
    }
  }

  public get displayAuctionsButton() {
    if(this.router.url === '/overview')  {
      return false
    } else {
      return true;
    }
  }

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
