import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgottenComponent } from './forgotten.component';
import { ForgottenRoutingModule } from './forgotten-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ForgottenComponent],
  imports: [
    CommonModule,
    ForgottenRoutingModule,
    FormsModule
  ]
})
export class ForgottenModule { }
