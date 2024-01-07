import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {

  url ="http://localhost:8081/api/user/profile/upload";
  user :any;
  profile:any;
  myprofile:any;

  imageForm: FormGroup =  this.formBuilder.group({
    image: ['']
  });
  profileForm: FormGroup = this.formBuilder.group({
    phonenumber: ['', Validators.required],
    bio: ['', Validators.required]
  });

  constructor( private formBuilder: FormBuilder, private userservice : UserService,private http: HttpClient,private authservice:AuthService) { }

  ngOnInit(): void {

    this.getUserData();
    
  }


  onSubmitimage(): void {
    if (this.imageForm.invalid) {
      return;
    }

    const _auth_token =  JSON.stringify (this.authservice.getToken());

    console.log(_auth_token);

    
  const token_parse  =JSON.parse(_auth_token)

  console.log(token_parse)
    const  headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token_parse}`
    });
  
  const  requestOptions = { headers: headers };


    const formData = new FormData();
    formData.append('file', this.imageForm.value.image);

    this.http.post(this.url,formData,requestOptions)
      .subscribe(
        response => {
          // Handle success, e.g., show a success message
          console.log(response);
        },
        error => {
          // Handle error, e.g., show an error message
          console.error(error);
        }
      );
  }



  onFileChange(event: any): void {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.imageForm.patchValue({
        image: file
      });
    }
  }



  onSubmit(): void {
    if (this.profileForm.invalid) {
      return;
    }

    const profileData = {
      phoneneumber: this.profileForm.value.phonenumber,
      bio: this.profileForm.value.bio
    };

    this.userservice.updateUser(profileData)
      .subscribe(
        response => {
         console.log(response);
         window.location.reload();
        },
        error => {
          console.error(error);
        }
      );
  }









  getUserData(){
      this.userservice.getUserloginData().subscribe(res=>{

        this.user = res ;
        console.log(res);
        console.log(this.user.id);
        localStorage.setItem("user_id",this.user.id);

        this.http.get("http://localhost:8089/api/user-profile/" +this.user.id).subscribe(res_=>{
            console.table(res_);
            this.profile = res_;
        })





        this.http.get("http://localhost:8089/api/userme/" +this.user.id).subscribe(res_=>{
          console.table(res_);
          this.myprofile = res_;
      })

      })

      
  }

}
