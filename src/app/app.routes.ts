import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { DonateComponent } from './donate/donate.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'volunteer', component: VolunteerComponent },
    { path: 'donate', component: DonateComponent }

];