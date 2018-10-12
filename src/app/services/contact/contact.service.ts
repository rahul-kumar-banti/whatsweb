import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  avilableContact: contact[];
contatct_url="../../../assets/data/mycontact.data.json"
  constructor(private _http:HttpClient) {
    this.getContatct().subscribe(res => {
      this.avilableContact = res;
    });
   }
getContatct():Observable<contact[]>{
  return this._http.get<contact[]>(this.contatct_url);
}
getFromContact(num, type, value?) {
  let cont;
  if (this.avilableContact) {
    cont = this.avilableContact.find(e => e.mobile == num);
    if (cont) {

      if (type == "image" || type == "name" || type == "contact_sharing") {
        let add = "";
        if (type == "image") {
          if (cont[type] == "") {
            if (value) {
              return value;
            } else {
              return "../../../assets/images/contact-img/default.png";
            }
          } else {
            let add1 ="/assets/images/contact-img/"
            // add = "../../../assets/images/contact-img/";
            return add1 + cont[type];
          }
        }
        if (type == "name") {
          if (cont[type] == "") {
            return num;
          } else {
            return cont[type];
          }
        }
      }
    }
  }
  return value?value:num;
}
 
}
