import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Http } from "@angular/http";
// import { chatdock } from "../whatsapp/shared/model/chat.model";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  dataurl = "../../assets/data/chatdoc.data.json";
  constructor(private _http:HttpClient) {}

  getchatdoc(): Observable<chatdock[]> {
    return this._http.get<chatdock[]>(this.dataurl)
  //  return this._http.get<chatdock[]>(this.dataurl);
  }
}
