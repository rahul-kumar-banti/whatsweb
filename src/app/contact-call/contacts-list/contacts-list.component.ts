import { ContactService } from './../../services/contact/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
contacts:contact[]
  constructor(private _contact:ContactService) { }

  ngOnInit() {
    this._contact.sortcont.subscribe(res => {
     
     this._contact.getSorted(res).then(r=>{
        this.contacts=r;
      })
    });
    if(!this.contacts){
      this._contact.getContatct().subscribe(res=>this.contacts=res)      
    }
  }
bgstyle(backgroundimg){
let style={
  'background-image':"url(/assets/images/contact-img/"+backgroundimg+")",
  "background-size":"cover",
  "packground-position":"center"
}
return style;
}

}
