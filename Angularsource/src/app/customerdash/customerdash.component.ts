import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-customerdash',
  templateUrl: './customerdash.component.html',
  styleUrls: ['./customerdash.component.css']
})
export class CustomerdashComponent implements OnInit {



  uid : string;
  upass:string;
  ciid:string;
  cid:Observable<string>;
  customer : Observable<Customer>;
 
  
  constructor(private _service : CustomerService,private _activatedRoute : ActivatedRoute) 
  { 
    
  }
   
    ngOnInit() {
      this.uid = this._activatedRoute.snapshot.params["uid"];  
 this.upass = this._activatedRoute.snapshot.params["upass"];
    this._service.logincustomer(this.uid,this.upass).subscribe(x=>{
      this.customer=this._service.showcustomer(parseInt(x));
  })
    };
  }