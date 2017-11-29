import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

    constructor(private http: Http, private router: Router){}

    doLoginFromService(userObj) {
        return this.http.post('http://localhost:3000/api/login', userObj)
        .map((response) => {
            return response.json();
        });
    }

}