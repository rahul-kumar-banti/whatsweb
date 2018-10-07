import { UserstateService } from './../services/user/userstate.service';
import { Component, OnInit } from '@angular/core';
// import { user } from './shared/model/user.model';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css']
})
export class WhatsappComponent implements OnInit {
currneuser:user;
  constructor(private _userlog:UserstateService) { }

  ngOnInit() {
    this._userlog.getuser().then(
      // res=>console.log(res['cuserNumber'])
      res=>this.currneuser=Object.assign(res)

    )
  }
  

}
