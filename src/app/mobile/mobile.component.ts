import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  whatsopen: boolean=true;;
 count:number=0;
 screenbackgroun:string="url(../assets/images/wall.jpg)";
 shad:boolean=true;
 homescreendisply:boolean=false;
 cameraopen:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  callForCameraOpen(status)
  {
    if(status="cameraopen"){
      this.homescreendisply=false;
      this.cameraopen=true

    }
  }
  callFromWhatsapp(e){
    if(status="whatsappopen"){
      this.homescreendisply=false;
      this.whatsopen=true

    }
  }
homebtnclick(e){
if(this.count==0){
  this.count=1;
  this.homescreendisply=true;
  this.shad=false;
}
else{
  this.count=0;
  this.shad=true;
  
}
if(this.homescreendisply){
  this.cameraopen=false;
}
}

}
