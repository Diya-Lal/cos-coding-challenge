import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../core/services/common.service';
import { LoginService } from '../core/services/login.service';
import { IRegisteredUser } from '../shared/models/RegisteredUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;

  constructor(private loginService: LoginService, private router: Router, private commonService: CommonService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup( {
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new  FormControl ( '' , [Validators.required])
    })
  }

  onLogin() {
    this.loginService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe(
      (LoginSuccessResponse: IRegisteredUser) => {
        sessionStorage.setItem('authToken', LoginSuccessResponse.token);
        sessionStorage.setItem('userId', LoginSuccessResponse.userId)
        this.router.navigate(['/overview']);
      },
      (LoginErrorResponse) => {
        this.commonService.openDialog({title: 'Sorry!', message: LoginErrorResponse.message})
      }
    )
  }

}
