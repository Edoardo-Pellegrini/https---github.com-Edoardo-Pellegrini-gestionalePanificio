
import { CommonModule } from '@angular/common';

import { ShopDashboardComponent } from './shop-dashboard/shop-dashboard.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ShopRoutingModule } from './shop-routing.module';
import { NgModule } from '@angular/core';
import { ShopMenuComponent } from '../layout/shop-layout/shop-menu/shop-menu.component';
import { MyboatComponent } from './myboat/myboat.component';
import { MyShopComponent } from './my-shop/my-shop.component';



@NgModule({
  declarations: [ShopDashboardComponent,ShopMenuComponent, MyboatComponent,MyShopComponent],
  imports: [
    CommonModule,
    FormsModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
