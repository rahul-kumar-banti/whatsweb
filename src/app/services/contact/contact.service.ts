import { resolve, reject } from "q";
import { Observable, Subject ,of} from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  avilableContact: contact[];
  sortcont: Subject<string>;
  sortingstring: string = "";
  sortedcontact: contact[];
  contatct_url = "/assets/data/mycontact.data.json";
  constructor(private _http: HttpClient) {
    this.sortcont = new Subject<string>();
    this.sortcont.next("hello");
    this.getContatct().subscribe(res => {
      this.avilableContact = res;
    });
    
    // this.sortcont.subscribe(res => {
    //   this.sortingstring = res;
    //  this.getSorted()
    // });
  }

  getContatct(): Observable<contact[]> {
    return this._http.get<contact[]>(this.contatct_url);
  }
  getSorted(str) {
    let promises = new Promise<contact[]>((resolve, reject) => {
      resolve(
        this.getContatct()
          .toPromise()
          .then(res => {
           return this.sortedcontact = res.filter(
              e =>
                e.name
                  .toLowerCase()
                  .indexOf(str.toLowerCase()) !== -1
            );
            // console.log(this.sortedcontact)
           
          })
      );
    });
    return promises;
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
                return "/assets/images/contact-img/default.png";
              }
            } else {
              let add1 = "/assets/images/contact-img/";
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
    return value ? value : num;
  }
}
