import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from '../layout/admin-layout/admin-layout.component';
import { UserDataComponent } from '../user/user-data/user-data.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { UsersComponent } from './users/users.component';



const routes: Routes = [
  { path: 'admin-dashboard', component: AdminLayoutComponent, children:[
    { path: '', component: AdminDashboardComponent},
    { path: 'users', component: UsersComponent},
   
    { path:'user-data', component: UserDataComponent} //modify password
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }