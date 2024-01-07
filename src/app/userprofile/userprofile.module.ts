import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserprofileRoutingModule } from './userprofile-routing.module';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MywishlistComponent } from './mywishlist/mywishlist.component';
import { ApplicationModule } from '../application/application.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { MydownloadComponent } from './mydownload/mydownload.component';


@NgModule({
  declarations: [
    MyprofileComponent,
    MywishlistComponent,
    MydownloadComponent
  ],
  imports: [
    CommonModule,
    UserprofileRoutingModule,
    ApplicationModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    FormsModule
  ]
})
export class UserprofileModule { }
