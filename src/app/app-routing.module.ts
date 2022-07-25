import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component: HomeComponent},
  {path:'about',canActivate:[AuthGuard],component: AboutComponent},
  {path:'content',canActivate:[AuthGuard],component: ContentComponent},
  {path:'movies',canActivate:[AuthGuard],component: MoviesComponent},
  {path:'tv',canActivate:[AuthGuard],component: TvShowsComponent},
  {path:'movies-details/:id',canActivate:[AuthGuard],component: MoviesDetailsComponent},
  {path:'tv-details/:id',canActivate:[AuthGuard],component: TvDetailsComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {
    path:'settings',
    loadChildren:()=>import('./settings/settings.module').then((m)=>m.SettingsModule)
  },
  {path:'**',component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
