import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';

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
          console.log(data)
        })
    }
 
  }
  backgroundim(ur){
  
    let stylestring="url("+ur+")";
    console.log(stylestring)
    
    return stylestring;
  }

}
