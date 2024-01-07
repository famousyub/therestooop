import { Component, OnInit } from '@angular/core';
import { Favourite } from 'src/app/models/favourite';
import { UserService } from 'src/app/services/user.service';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-mywishlist',
  templateUrl: './mywishlist.component.html',
  styleUrls: ['./mywishlist.component.scss']
})
export class MywishlistComponent implements OnInit {


  wishlist:Favourite[] = [] ;
  userId = Number(localStorage.getItem("user_id"));
  datas:any ;
  mydatay:any[] = [];
  constructor(private userservice : UserService,private videoservice:VideosService) { }

  ngOnInit(): void {
    this.getMywishlist();
  }

  //getUserWishlist

  getMywishlist(){

    this.userservice.getUserWishlist(this.userId).subscribe(res=>{
       console.table(res);
       this.wishlist = res;
       this.wishlist.forEach(el=>{
        const formation_id = el.formation.id
        this.videoservice.getFormationById(formation_id).subscribe(res_=>{
          this.datas= res_;
          this.mydatay.push(this.datas);
  
         })

       })
  
    })

     
  }

}
