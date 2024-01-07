import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private eventpath ="http://localhost:8089/api/beginVideo/mediashare/all";
  private formation ="http://localhost:8089/api/videos/formation/all";
  private mediashare ="http://localhost:8089/api/videos/mediashare/all";
  private formationId= "http://localhost:8089/api/videos/formation/one";

  private mediashareId = "http://localhost:8089/api/videos/mediashare/one/"

  private apiformationclient = "http://localhost:8089/api/v1/cleint"


  constructor(private http: HttpClient) { }


  getAllEvent(){

     return this.http.get(this.eventpath);
  }

  getformationapiclient(id:Number){
     return this.http.get(this.apiformationclient +"/" + id);
  }

  getAllFormation(){
    return this.http.get(this.formation);
  }

  getAllmediashare(){
    return this.http.get(this.mediashare);

  }


  getFormationById(id:Number){
    return this.http.get(this.formationId +"/" + id);
     
  }

  
  getmEDIAById(id:Number){
    return this.http.get(this.mediashareId +"/" + id);
     
  }

}
