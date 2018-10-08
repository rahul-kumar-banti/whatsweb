import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  constructor(private _hhtp:HttpClient) { }
  getStatus():Observable<calldoc[]>{
    return this._hhtp.get<calldoc[]>("../../assets/data/callingdoc.data.json");
  }
}
