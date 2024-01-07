import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Favourite } from 'src/app/models/favourite';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-formationdetails',
  templateUrl: './formationdetails.component.html',
  styleUrls: ['./formationdetails.component.scss']
})
export class FormationdetailsComponent implements OnInit {


   formationdetails:any ;
   formation:any;
   id :number=1 ;
   userId =Number(localStorage.getItem("user_id"));
   user :any;
   favourite:Favourite[]=[];
  constructor(private videoservice: VideosService ,private authservice:AuthService, private route : ActivatedRoute ,private userservice:UserService,private http:HttpClient) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
         console.log(params.id);
         let _id :Number = params.id
         this.id=params.id

         this.getFormationById(_id);
         
    });
    this.getUserData();

    this.getFormationById(this.id);

    console.log(this.formation);
  }







  getUserData(){
    this.userservice.getUserloginData().subscribe(res=>{

      this.user = res ;
      console.log(res);
      console.log(this.user.id);
      localStorage.setItem("user_id",this.user.id);

     this.userId = this.user.id;

    })

    
}

  getFormationById(id:Number){

    this.videoservice.getFormationById(id)
    .subscribe(res=>{
       this.formationdetails =res;
    });

    this.videoservice.getformationapiclient(id).subscribe(res=>{
       this.formation=res;
    })

  }


  addFormationtowishlist(){

    this.userservice.addWishlist(this.formation).subscribe(res=>{
        console.log(res);
    })

      
  }

  download(){
    const _auth_token =  JSON.stringify (this.authservice.getToken());

    console.log(_auth_token);

    
  const token_parse  =JSON.parse(_auth_token)

  console.log(token_parse)
    const  headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token_parse}`
    });
  
  const  requestOptions = { headers: headers };

    console.log(this.id)
     this.http.get("http://localhost:8081/api/v1/cleint/downloadFile/" + this.id).subscribe(res=>{
       console.log(res);
       alert("download success");
       localStorage.setItem("filedownload " + this.id ,this.id.toString());
       window.location.reload();

     })
  }


  downloadFile(id:number): Observable<any> {
    const url = `http://localhost:8081/api/v1/cleint/downloadFile/${id}`;
    return this.http.get(url, { responseType: 'blob' });
  }




  downloadFiled () {
    const fileId = 1; // Replace with the actual file ID
    this.downloadFile(this.id).subscribe(
      (data: any) => {
        const blob = new Blob([data], { type: data.type });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `myfile-${ new Date().getTime()}.mp4` // Replace with the desired filename and extension
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      },
      (error) => {
        console.error('Error downloading file:', error);
      }
    );
  }








  // loadWishlist(): void {
  //   this.userservice.getUserWishlist(this.userId)
  //     .subscribe(wishlist => {
  //       this.wishlist = wishlist;
  //     });
  // }

  addToWishlist(): void {
    const wishlistItem: Favourite = {
      userId:  this.userId,
      formation:this.formation
    };

    this.userservice.addToWishlist(this.userId, wishlistItem)
      .subscribe(() => {
     
      });
  }










}
