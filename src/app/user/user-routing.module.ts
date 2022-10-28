import { UserDataComponent } from './user-data/user-data.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLayoutComponent } from '../layout/user-layout/user-layout.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserOrderComponent } from './order/user-order/user-order.component';



const routes: Routes = [
  { path: 'user-dashboard', component: UserLayoutComponent, children:[
    { path: '', component: UserDashboardComponent},
    
    { path: 'user-data', component: UserDataComponent}, 
    { path: 'user-order', component: UserOrderComponent}, 

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
