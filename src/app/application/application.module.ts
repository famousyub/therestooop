import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MyvideosComponent } from './myvideos/myvideos.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { VideosectionComponent } from './videosection/videosection.component';
import { FormationdetailsComponent } from './formationdetails/formationdetails.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FormationvideoComponent } from './formationvideo/formationvideo.component';
import { PipeformationPipe } from '../search/pipeformation.pipe';
import { FormsModule } from '@angular/forms';
import { PoputsearchComponent } from './poputsearch/poputsearch.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MenuComponent,
    FooterComponent,
    MyvideosComponent,
    WelcomeComponent,
    VideosectionComponent,
    FormationdetailsComponent,
    SidemenuComponent,
    FormationvideoComponent,
    PipeformationPipe,
    PoputsearchComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    MenuComponent,
    FooterComponent,
    MyvideosComponent,
    WelcomeComponent,
    VideosectionComponent
  ]
})
export class ApplicationModule { }
