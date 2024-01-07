import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FullComponent } from './layouts/full/full.component';
import { WelcomeComponent } from './application/welcome/welcome.component';
import { AuthGuard } from './gurads/auth.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent , canActivate:[AuthGuard]},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
   
  },

  {
    path: '',
    loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule),
    canActivate:[AuthGuard]
  },
  
  {
    path: 'user',
    loadChildren: () => import('./userprofile/userprofile.module').then(m => m.UserprofileModule),
    canActivate:[AuthGuard]
  },
  
    
  
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
