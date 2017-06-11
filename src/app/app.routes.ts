import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { DonateComponent } from './donate/donate.component';
import { TrainingComponent } from './training/training.component';
import { StatsComponent } from './stats/stats.component';
import { OrganizeComponent } from './organize/organize.component';
import { EventsComponent } from './events/events.component';
import  {LoginComponent} from './login/login.component';
import {CreateProfileComponent} from "./create-profile/create-profile.component";


export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'volunteer', component: VolunteerComponent },
    { path: 'donate', component: DonateComponent },
    { path: 'training', component: TrainingComponent },
    { path: 'stats', component: StatsComponent },
    { path: 'events', component: EventsComponent },
    { path: 'organize', component: OrganizeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'createProfile', component: CreateProfileComponent }
    ];
