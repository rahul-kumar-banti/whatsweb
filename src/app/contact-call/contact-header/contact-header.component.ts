import { ContactService } from "./../../services/contact/contact.service";
import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-contact-header",
  templateUrl: "./contact-header.component.html",
  styleUrls: ["./contact-header.component.css"]
})
export class ContactHeaderComponent implements OnInit {
  searchtext: string = "";
  constructor(private _cont: ContactService) {
    this._cont.sortcont.next("r")
  }
  searchtig(st) {
    this._cont.sortcont.next(st);
  }
  ngOnInit() {}
}
