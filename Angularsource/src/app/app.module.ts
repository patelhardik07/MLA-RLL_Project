import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes} from '@angular/router'
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { HomeComponent } from './home/home.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { CustomerdashComponent } from './customerdash/customerdash.component';
import { VendordashComponent } from './vendordash/vendordash.component';

const appRoutes: Routes = [
  {path:'' ,component:HomeComponent},
  {path: 'customerlogin',component:CustomerloginComponent},
{path: 'customerlogin',component:CustomerloginComponent},
{path: 'vendorlogin',component:VendorloginComponent},
{path: 'customerdash/:uid/:upass',component:CustomerdashComponent},
{path: 'vendordash/:vid/:vpass',component:VendordashComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CustomerloginComponent,
    HomeComponent,
    VendorloginComponent,
    CustomerdashComponent,
    VendordashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
