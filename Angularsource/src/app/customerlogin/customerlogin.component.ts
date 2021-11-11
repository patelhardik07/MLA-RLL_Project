import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {


  uid : string;
  upass:string;
  ciid:string;
  cid:Observable<string>;
  customer : Observable<Customer>;

login() {
    this._router.navigate(["/customerdash",this.uid,this.upass]);
  }
    
  constructor(private _router : Router) {
   
   }
  ngOnInit(): void {
  }

}
