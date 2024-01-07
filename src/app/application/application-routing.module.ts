import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormationdetailsComponent } from './formationdetails/formationdetails.component';
import { MyvideosComponent } from './myvideos/myvideos.component';
import { FormationvideoComponent } from './formationvideo/formationvideo.component';

const routes: Routes = [
  {
    path:'' , component: WelcomeComponent,
    
  },
  {
   path: 'vid/:id' , component : FormationdetailsComponent
  } ,
  {
    path: 'vid' , component: MyvideosComponent
  },
  {
    path: 'formation' , component: FormationvideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
