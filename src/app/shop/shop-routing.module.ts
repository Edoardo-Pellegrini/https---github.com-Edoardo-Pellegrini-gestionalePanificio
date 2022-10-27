
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkInProgressComponent } from '../admin/work-in-progress/work-in-progress.component';
import { ShopLayoutComponent } from '../layout/shop-layout/shop-layout.component';
import { MyboatComponent } from './myboat/myboat.component';
import { MyShopComponent } from './my-shop/my-shop.component';
import { ShopDashboardComponent } from './shop-dashboard/shop-dashboard.component';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';
import { UserDataComponent } from '../user/user-data/user-data.component';



const routes: Routes = [
  { path: 'shop-dashboard', component: ShopLayoutComponent, children:[  
    {path: '', component: ShopDashboardComponent},
    {path: 'myboat', component: MyboatComponent},
    { path: 'user-data', component: UserDataComponent},
    {path: 'my-shop', component: MyShopComponent},
    

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
