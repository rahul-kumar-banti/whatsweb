import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
// import { statusdoc } from '../whatsapp/shared/model/chat.model';

@Injectable({
  providedIn: 'root'
})
export class StatusServicesService {
statusUrl:string="../../assets/data/statusdoc.data.json"
r:statusdoc;
  constructor(private _http:HttpClient) { }

  getstatus():Observable<statusdoc[]>{
 return this._http.get<statusdoc[]>(this.statusUrl);
  }
}
