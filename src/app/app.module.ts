import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from "@angular/forms";
import{} from '@types/googlemaps';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { DonateComponent } from './donate/donate.component';
import { EventsComponent } from './events/events.component';
import { OrganizeComponent } from './organize/organize.component';
import { TrainingComponent } from './training/training.component';
import { StatsComponent } from './stats/stats.component';
import { MapComponent } from './map/map.component';
import { LocationFormComponent } from './location-form/location-form.component';
import { OrganizeSidebarComponent } from './organize-sidebar/organize-sidebar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { VolunteerSidebarComponent } from './volunteer-sidebar/volunteer-sidebar.component';
import{SidebarModule} from 'ng-sidebar';
import { VolunteerFormComponent } from './volunteer-form/volunteer-form.component';
import { VolunteerFeatureComponent } from './volunteer-feature/volunteer-feature.component';
import { OrganizeFeatureComponent } from './organize-feature/organize-feature.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { EventsSmsComponent } from './events-sms/events-sms.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturesPageComponent,
    AboutComponent,
    HomeComponent,
    VolunteerComponent,
    DonateComponent,
    EventsComponent,
    OrganizeComponent,
    TrainingComponent,
    StatsComponent,
    MapComponent,
    LocationFormComponent,
    OrganizeSidebarComponent,
    JumbotronComponent,
    HomeFooterComponent,
    VolunteerSidebarComponent,
    VolunteerFormComponent,
    VolunteerFeatureComponent,
    OrganizeFeatureComponent,
    EventsCalendarComponent,
    EventsSmsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFiwwFBmZShYGndwVY8DV6x1Z9Jc8ZhHI',
      libraries:["places"]
    }),
    SidebarModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
