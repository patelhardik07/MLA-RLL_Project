import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { HomeComponent } from './home/home.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
