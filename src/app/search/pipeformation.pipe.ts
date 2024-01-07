import { Pipe, PipeTransform } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PoputsearchComponent } from '../application/poputsearch/poputsearch.component';

@Pipe({
  name: 'pipeformation'
})
export class PipeformationPipe implements PipeTransform {

  constructor(private dialog: MatDialog){}

  // transform(items: any[], searchText: string): any[] {
  //   if (!items) {
  //     return [];

  //   }
  //   if (!searchText) {
  //     return items;
  //   }
  //   searchText = searchText.toLowerCase();
  //   return items.filter(item => {
  //     for (const key in item) {
  //       if (item.hasOwnProperty(key) && item[key] !== null) {
  //         const value = item[key].toString().toLowerCase();
  //         if (value.includes(searchText)) {
  //           return true;
  //         }
  //       }
  //     }
      
     
  //     setTimeout(() => {
  //       this.dialog.open(PoputsearchComponent, {
  //         width: '300px', // Adjust the width as needed,
  //         data: "no found " + searchText + "  not found video" 
  //       });
        
  //     }, 5000000);
      

     
  //     return false;
  //   });
  // }

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    
    const filteredItems = items.filter(item => {
      for (const key in item) {
        if (item.hasOwnProperty(key) && item[key] !== null) {
          const value = item[key].toString().toLowerCase();
          if (value.includes(searchText)) {
            return true;
          }
        }
      }
      return false;
    });



    // if (filteredItems.length === 0) {
    //   this.dialog.open(PoputsearchComponent, {
    //     width: '300px', // Adjust the width as needed,
    //     data: "no found " + searchText + "  not found video" 
    //   });
      
    //   setTimeout(() => {
    //      window.location.reload();
    //      localStorage.setItem("serachtext",searchText);
    //   }, 3000);
    // }

    return filteredItems;
  }
}







