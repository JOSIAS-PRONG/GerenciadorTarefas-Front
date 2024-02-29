import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/page/home/home.component';
import { CardDetailsComponent } from './modules/card-details/page/card-details/card-details.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'card/:id', component: CardDetailsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
