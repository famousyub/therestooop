import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MywishlistComponent } from './mywishlist/mywishlist.component';
import { MydownloadComponent } from './mydownload/mydownload.component';

const routes: Routes = [
  {path:'me' , component:MyprofileComponent},
  {path:'wishlist' , component:MywishlistComponent},
  {path:'downloads' , component:MydownloadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserprofileRoutingModule { }
