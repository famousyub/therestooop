import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mydownload',
  templateUrl: './mydownload.component.html',
  styleUrls: ['./mydownload.component.scss']
})
export class MydownloadComponent implements OnInit {

  donwload :any[] = [] ;
  constructor() { }

  ngOnInit(): void {
    this.getmydownload();
  }
 

  getmydownload(){
    for (let i = 0; i< localStorage.length; i++) {

      // set iteration key name
      const key = String(localStorage.key(i));
    
      // use key name to retrieve the corresponding value
      const value = localStorage.getItem(key);
     const  df = {
         key :key ,
         value:value 
      }
    
      // console.log the iteration key and value
      console.log('Key: ' + key + ', Value: ' + value);  

       if(key!='token'){
      this.donwload.push(JSON.parse( JSON.stringify(df)));
       }
    }
  }
}
