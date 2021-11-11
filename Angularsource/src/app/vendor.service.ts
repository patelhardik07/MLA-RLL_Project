import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private _http : Http) { }

  loginvendor(vid : string,vpass:string) :Observable<string>  {
    return this._http.get("http://localhost:8080//vendorAuthenticate/"+vid+"/"+vpass).map((res: Response) => res.json());
  }
  showvendor(ciid : number) : Observable<Vendor> {
    return this._http.get("http://localhost:8080/vendor/"+ciid)
    .map((res: Response) => res.json());
  }
}
