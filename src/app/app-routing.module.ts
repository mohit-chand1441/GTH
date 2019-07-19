import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WatchOngoingComponent } from './watch-ongoing/watch-ongoing.component';
import { LogSignComponent } from './log-sign/log-sign.component';
import { ContactComponent } from './contact/contact.component';
import { PubgmatchComponent } from './pubgmatch/pubgmatch.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { FreefirematchComponent } from './freefirematch/freefirematch.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'watch-ongoing',component:WatchOngoingComponent},
  {path:'pubgmatch',component:PubgmatchComponent},
  {path:'freefirematch',component:FreefirematchComponent},
  {path:'login-signup',component:LogSignComponent},
  {path:'one-way-binding',component:OneWayBindingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
