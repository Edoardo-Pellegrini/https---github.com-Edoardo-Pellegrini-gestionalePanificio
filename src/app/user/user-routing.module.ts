import { UserDataComponent } from './user-data/user-data.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserBoatComponent } from './user-boat/user-boat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLayoutComponent } from '../layout/user-layout/user-layout.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';
import { UserRentalComponent } from './user-rental/user-rental.component';


const routes: Routes = [
  { path: 'user-dashboard', component: UserLayoutComponent, children:[
    { path: '', component: UserDashboardComponent},
    { path: 'boats', component: UserBoatComponent}, //route as /user-dashboard/boats
    { path: 'profile', component: UserProfileComponent}, //route as /user-dashboard/profile
    { path: 'user-data', component: UserDataComponent}, //route as /user-dashboard/user-data
    {path: 'checkout/:id', component: UserCheckoutComponent},
    {path: 'rental/:id', component: UserRentalComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
