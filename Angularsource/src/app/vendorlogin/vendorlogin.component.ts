import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vendorlogin',
  templateUrl: './vendorlogin.component.html',
  styleUrls: ['./vendorlogin.component.css']
})
export class VendorloginComponent implements OnInit {

 
  vid : string;
  vpass:string;
  vendor : Observable<Vendor>;
  login() {
    this._router.navigate(["/vendordash",this.vid,this.vpass]);
    }
    
  
  constructor(private _router : Router) {
   
  }

  ngOnInit(): void {
  }

}
