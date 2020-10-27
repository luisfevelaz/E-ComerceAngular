import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PhoneComponent } from './components/phone/phone.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FotografiaComponent } from './components/fotografia/fotografia.component';
import { LineaBComponent } from './components/linea-b/linea-b.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PhoneComponent,
    HomeComponent,
    FotografiaComponent,
    LineaBComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path: 'phone', component:PhoneComponent},
      {path: 'foto', component:FotografiaComponent},
      {path: 'blanca', component:LineaBComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
