


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminMenuComponent } from './admin-layout/admin-menu/admin-menu.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserMenuComponent } from './user-layout/user-menu/user-menu.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ShopLayoutComponent } from './shop-layout/shop-layout.component';
import { ShopMenuComponent } from './shop-layout/shop-menu/shop-menu.component';
import { MyboatComponent } from '../shop/myboat/myboat.component';
import { MyShopComponent } from '../shop/my-shop/my-shop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Modulo di layout. Viene caricato nel rputer outlet padre e poi 
 * non viene più ricaricato. Quando clicchiamo su un link ricarichiamo solo l'outlet
 * che sta dentro AdminLayoutComponent
 * 
 * @author Vittorio Valent
 * 
 * @see AdminLayoutComponent
 */
@NgModule({

  declarations: [AdminLayoutComponent, AdminMenuComponent, HeaderComponent,ShopLayoutComponent, ShopMenuComponent,UserLayoutComponent,MyShopComponent,UserMenuComponent, MyboatComponent],

  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
