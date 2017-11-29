import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService]
})
export class LoginComponent {

    constructor(private router: Router, private loginService: LoginService) {}

    doLogin(userDtl){
       this.loginService.doLoginFromService(userDtl)
       .subscribe((data) => {
            if(data){
                this.router.navigate(['home'])
            }
       });      
    }

    doLogout() {
        sessionStorage.clear()
    }

}