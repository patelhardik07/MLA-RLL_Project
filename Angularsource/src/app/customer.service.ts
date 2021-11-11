import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http : Http) { }

  logincustomer(uid : string,upass:string) :Observable<string>  {
    return this._http.get("http://localhost:8080//customerAuthenticate/"+uid+"/"+upass).map((res: Response) => res.json());
  }
  showcustomer(ciid : number) : Observable<Customer> {
    return this._http.get("http://localhost:8080/customer/"+ciid)
    .map((res: Response) => res.json());
  }
  

  
}


