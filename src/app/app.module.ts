import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WatchOngoingComponent } from './watch-ongoing/watch-ongoing.component';
import { LogSignComponent } from './log-sign/log-sign.component';
import { ContactComponent } from './contact/contact.component';
import { PubgmatchComponent } from './pubgmatch/pubgmatch.component';
import { FreefirematchComponent } from './freefirematch/freefirematch.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { FormComponent } from './form/form.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    WatchOngoingComponent,
    LogSignComponent,
    ContactComponent,
    PubgmatchComponent,
    FreefirematchComponent,
    OneWayBindingComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
