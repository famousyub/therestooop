import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/login-request';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
	password : string = '';

	isSignedin = false;

	error: string = '';

	constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {}

	ngOnInit() {
		this.isSignedin = this.authService.isUserSignedin();

		if(this.isSignedin) {
			this.router.navigateByUrl('home');
		}
	}

	doSignin() {
		if(this.username !== '' && this.username !== null && this.password !== '' && this.password !== null) {
			const request: LoginRequest = { username: this.username, password: this.password};

			this.authService.signin(request).subscribe((result)=> {
				//this.router.navigate(['/home']);
				this.router.navigateByUrl('');
			}, () => {
				this.error = 'Either invalid credentials or something went wrong';
			});
		} else {
			this.error = 'Invalid Credentials';
		}
	}
}
