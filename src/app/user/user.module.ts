import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

import { UserDataComponent } from './user-data/user-data.component';
import { UserOrderComponent } from './order/user-order/user-order.component';


@NgModule({
  declarations: [UserDashboardComponent,  UserDataComponent, UserOrderComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
