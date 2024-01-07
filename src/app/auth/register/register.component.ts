import { Component, OnInit } from '@angular/core';
import { SignupRequest } from 'src/app/models/signup-request';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService) { }

	username: string = '';
  email:string='' ;
  name :string='';
	password: string = '';

	user_roles: any = [
		{name:'User', value:'ROLE_USER', selected: false},
		{name:'Admin', value:'ROLE_ADMIN', selected: false},
		{name:'Anonymous', value:'ROLE_ANONYMOUS', selected: false},
	]

	selectedRoles: string[] = [];

	error: string = '';
	success: string = '';

	ngOnInit(): void {
	}

	onChangeCategory(event: any, role: any) {
		this.selectedRoles.push(role.value);
	}

	doSignup() {
		if(this.username !== '' && this.username !== null && this.password !== '' && this.password !== null && this.selectedRoles.length > 0) {
			const request: SignupRequest = { username: this.username, password: this.password, email: this.email,name:this.name};

			this.authService.signup(request).subscribe((result)=> {
				//console.log(result);
				//this.success = 'Signup successful';
				this.success = result;
			}, (err) => {
				//console.log(err);
				this.error = 'Something went wrong during signup';
			});
		} else {
			this.error = 'All fields are mandatory';
		}
	}


}
