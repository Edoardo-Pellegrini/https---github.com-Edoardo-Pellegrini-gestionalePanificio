import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { AdminModule } from './admin/admin.module';
import { ShopRoutingModule } from './shop/shop-routing.module';
import { NgModule } from '@angular/core';
import { UserModule } from './user/user.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { UserRoutingModule } from './user/user-routing.module';

import { ForgottenRoutingModule } from './forgotten/forgotten-routing.module';
import { ForgottenModule } from './forgotten/forgotten.module';
import { RegisterComponent } from './register/register.component';






@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    LayoutModule,
    AdminModule,
    UserModule,
    ShopRoutingModule,
    FormsModule,
    
    ReactiveFormsModule,
    AdminRoutingModule,
    UserRoutingModule,
    ForgottenModule, 
    ForgottenRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }