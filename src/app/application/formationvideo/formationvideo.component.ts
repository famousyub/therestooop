import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Favourite } from 'src/app/models/favourite';
import { UserService } from 'src/app/services/user.service';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-formationvideo',
  templateUrl: './formationvideo.component.html',
  styleUrls: ['./formationvideo.component.scss']
})
export class FormationvideoComponent implements OnInit {

  
  formationdetails:any ;
  formation:any;
  id :number=1 ;
  userId =Number(localStorage.getItem("user_id"));
  user :any;
  favourite:Favourite[]=[];
  formations:any ;
  events:any;
  searchText:string='';
  mediashare:any;
 constructor(private videoservice: VideosService , private route : ActivatedRoute ,private userservice:UserService,private http:HttpClient) { }

 ngOnInit(): void {
  this.getAllEvents();
  this.getAllFormations();
  this.getAllMediaShare();
 
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


 getAllFormations(){
  this.videoservice.getAllFormation().subscribe(res=>{
      console.table(res);
      this.formations=res ;
  })
}

getAllEvents(){
this.videoservice.getAllEvent().subscribe(res=>{
  console.table(res);
  this.events=res ;
})
  
}

getAllMediaShare(){
this.videoservice.getAllmediashare().subscribe(res=>{
  console.table(res);
  this.mediashare=res ;
})
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
