import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';
import { ActivatedRoute } from '@angular/router';
import { VendorService } from '../vendor.service';
@Component({
  selector: 'app-vendordash',
  templateUrl: './vendordash.component.html',
  styleUrls: ['./vendordash.component.css']
})
export class VendordashComponent implements OnInit {
  vid : string;
  vpass:string;
  ciid:string;
  cid:Observable<string>;
  vendor : Observable<Vendor>;
 
  constructor(private _service : VendorService,private _activatedRoute : ActivatedRoute) 
  { 
    
  }
  

  ngOnInit() {
    this.vid = this._activatedRoute.snapshot.params["vid"];  
this.vpass = this._activatedRoute.snapshot.params["vpass"];
  this._service.loginvendor(this.vid,this.vpass).subscribe(x=>{
    this.vendor=this._service.showvendor(parseInt(x));
})
  };
}