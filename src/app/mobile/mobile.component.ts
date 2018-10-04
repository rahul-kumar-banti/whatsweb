import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
 count:number=0;
 shad:boolean=true;
  constructor() { }

  ngOnInit() {
  }
homebtnclick(e){
if(this.count==0){
  this.count=1;
  this.shad=false;
}
else{
  this.shad=true;
  this.count=0;
}
}
}
