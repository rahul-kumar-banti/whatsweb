import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';
// import { chatdock } from '../shared/model/chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
chatdocdata:chatdock[];
backgroundsize="cover"
  constructor(private _chatdocservice:ChatService) {
  
    // this._chatdocservice.getchatdoc().subscribe(data=>{
    //   this.chatdocdata=data;
    //   console.log(data)
    // })
   }

  ngOnInit() {
    if(this._chatdocservice){
      this._chatdocservice.getchatdoc().subscribe(data=>{
          this.chatdocdata=data;
          // console.log(data)
        })
    }
 
  }
  backgroundim(ur){
  
    let stylestring="url("+ur+")";
    console.log(stylestring)
    
    return stylestring;
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
