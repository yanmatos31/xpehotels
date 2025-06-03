import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { authenticationGuard } from './authentication.guard';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [authenticationGuard]},
    {path: 'hotels', component: HotelsComponent, canActivate: [authenticationGuard]},
    {path: 'hotels/:id', component: HotelDetailComponent, canActivate: [authenticationGuard]}
];
