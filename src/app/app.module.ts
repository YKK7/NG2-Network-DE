import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';
import { MapFormPageComponent } from './map-form-page/map-form-page.component';
import { HeaderComponent } from './header/header.component';
import { MapPageComponent } from './map-page/map-page.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { DonateComponent } from './donate/donate.component';
import { EventsComponent } from './events/events.component';
import { OrganizeComponent } from './organize/organize.component';
import { TrainingComponent } from './training/training.component';
import { StatsComponent } from './stats/stats.component';


@NgModule({
  declarations: [
    AppComponent,
    MapFormPageComponent,
    HeaderComponent,
    MapPageComponent,
    FeaturesPageComponent,
    AboutComponent,
    HomeComponent,
    VolunteerComponent,
    DonateComponent,
    EventsComponent,
    OrganizeComponent,
    TrainingComponent,
    StatsComponent
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
