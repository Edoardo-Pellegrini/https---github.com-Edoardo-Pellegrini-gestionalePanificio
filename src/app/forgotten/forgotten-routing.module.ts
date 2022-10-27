import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgottenComponent } from './forgotten.component';

const routes: Routes = [
  { path: 'forgotten', component: ForgottenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgottenRoutingModule { }