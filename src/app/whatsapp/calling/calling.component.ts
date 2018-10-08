import { CallService } from './../../services/call.service';
import { HttpClient } from '@angular/common/http';
import { UserstateService } from './../../services/user/userstate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calling',
  templateUrl: './calling.component.html',
  styleUrls: ['./calling.component.css']
})
export class CallingComponent implements OnInit {
  userimg:any;
  
currentuser:user;
recentcall:calldoc[];

  constructor(private _user:UserstateService,private _callhistory:CallService) { }

  ngOnInit() {
    this._user.getuser().then(res => {
      this.currentuser = Object.assign(res);
    });
    this._callhistory.getStatus().subscribe(res=>{
this.recentcall=res;
    })
  }
  getImgAddress(by,to){
    let requestNum=this.currentuser.cuserNumber!=by?by:to;
    
  return "../../../assets/images/default.png"
  }

}
