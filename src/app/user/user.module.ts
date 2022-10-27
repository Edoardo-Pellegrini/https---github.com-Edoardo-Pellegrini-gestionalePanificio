import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserBoatComponent } from './user-boat/user-boat.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';
import { UserRentalComponent } from './user-rental/user-rental.component';

@NgModule({
  declarations: [UserDashboardComponent, UserBoatComponent, UserProfileComponent, UserDataComponent, UserCheckoutComponent, UserRentalComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
