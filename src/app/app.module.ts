import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MapFormPageComponent } from './map-form-page/map-form-page.component';
import { HeaderComponent } from './header/header.component';
import { MapPageComponent } from './map-page/map-page.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { DonateComponent } from './donate/donate.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MapFormPageComponent,
    HeaderComponent,
    MapPageComponent,
    FeaturesPageComponent,
    AboutComponent,
    HomeComponent,
    VolunteerComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyCVX2yvf9wYcaQVJpG1YC8P__g0YVKnhNw'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
