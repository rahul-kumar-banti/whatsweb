import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { resolve } from "q";
// import { user } from "../../whatsapp/shared/model/user.model";

@Injectable({
  providedIn: "root"
})
export class UserstateService {
  currneuser: any;
  cuser: string;
  cuserNumber: string;
  cuserImage: string;
  cuserToken: string;
  userdataurl: string = "../../../assets/data/user.data.json";
  users: user[];
  userfound: user;
  defalultuser: user = {
    cuser: "rahul",
    cuserNumber: "7545995484",
    cuserToken: "789.965.2225",
    cuserImage: "../../../assets/images/default.png"
  };
  constructor(private _http: HttpClient) {
    this.getuser().then(res => {
      this.currneuser = Object.assign(res);
    });
  }
  getuser() {
    return this.setuser();
  }
  setuser(mobno?, pass?) {
    if (!mobno || !pass) {
      this.userfound = this.defalultuser;
      let promiss = new Promise((resolve, reject) => {
        resolve(this.userfound);
        return this.userfound;
      });
      return promiss;
    } else {
      let promiss = new Promise((resolve, reject) => {
        resolve(
          this._http
            .get<user[]>(this.userdataurl)
            .toPromise()
            .then(data => {
              this.users = data;
              this.userfound = this.users.find(
                e => e.cuserNumber == mobno && e.cpass == pass
              );
              return this.userfound;
            })
        );
        return this.userfound;
      });

      return promiss;
    }
  }

  getUserDetail(unumber, detailtype) {
    let promiss = new Promise((resolve, reject) => {
      resolve(
        this._http
          .get<user[]>(this.userdataurl)
          .toPromise()
          .then(data => {
            this.users = data;
            this.userfound = this.users.find(e => e.cuserNumber == unumber);
            if (this.userfound) return this.userfound[detailtype];
            else return this.defalultuser[detailtype];
          })
      );
      if (this.userfound) return this.userfound[detailtype];
      else return this.defalultuser[detailtype];
      
    });

    return promiss;
  }
}
