import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ActivatedRoute, Router } from '@angular/router';
import { LoginRequest } from '../models/login-request';
import { SignupRequest } from '../models/signup-request';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8089/api';

	constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

	signin(request: LoginRequest): Observable<any> {
		return this.http.post<any>(this.baseUrl + '/v1/auth/signin', request, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).pipe(map((resp) => {
			sessionStorage.setItem('user', request.username);
			sessionStorage.setItem('token', 'HTTP_TOKEN ' + resp.accessToken);
            localStorage.setItem("token",resp.accessToken);
			return resp;
		}));
	}

	signup(request: SignupRequest): Observable<any> {
		return this.http.post<any>(this.baseUrl + '/v1/auth/signup', request, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'}).pipe(map((resp) => {                                                         
			return resp;
		}));
	}

	signout() {
		sessionStorage.removeItem('user');
		sessionStorage.removeItem('token');

		this.router.navigateByUrl('signin');
	}

	isUserSignedin() {
		return sessionStorage.getItem('token') !== null;
	}

	getSignedinUser() {
		return sessionStorage.getItem('user') as string;
	}

	getToken() {
		let token = localStorage.getItem('token') as string;
		return token;
	}

}
