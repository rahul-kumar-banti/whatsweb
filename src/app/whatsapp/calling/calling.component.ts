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
  getImgAddress(by,to,byicon,toicon){
    let resulticon=this.currentuser.cuserNumber!=by?byicon:toicon;
    if(resulticon)
    {
      return resulticon
    }
  return "../../../assets/images/default.png"
  }
  getbackground(b:string){
    let style={
      'background-image':"url('"+b+"')",
      "background-size":'cover',
      "background-position":'center'
    }
    return style;

  }
}
