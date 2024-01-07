import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-myvideos',
  templateUrl: './myvideos.component.html',
  styleUrls: ['./myvideos.component.scss']
})
export class MyvideosComponent implements OnInit {

  formations:any ;
  events:any;
  mediashare:any;
  searchText:string='';

  constructor(private videsOservice : VideosService) { }

  ngOnInit(): void {
    this.getAllEvents();
    this.getAllFormations();
    this.getAllMediaShare();
  }

   getAllFormations(){
      this.videsOservice.getAllFormation().subscribe(res=>{
          console.table(res);
          this.formations=res ;
      })
   }

   getAllEvents(){
    this.videsOservice.getAllEvent().subscribe(res=>{
      console.table(res);
      this.events=res ;
  })
      
   }

   getAllMediaShare(){
    this.videsOservice.getAllmediashare().subscribe(res=>{
      console.table(res);
      this.mediashare=res ;
  })
   }

}
