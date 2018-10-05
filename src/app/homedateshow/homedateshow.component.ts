import { Component, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-homedateshow',
  templateUrl: './homedateshow.component.html',
  styleUrls: ['./homedateshow.component.css']
})
export class HomedateshowComponent implements OnInit {
  today:Date=new Date();
  hr: number=this.today.getHours();
  minuts: number=this.today.getMinutes();;
  sec: number=this.today.getSeconds();
  daynum=this.today.getDay();
  timeshow:any="";
  day=['sun',"mon","tues","wed","thrus","fri","sat"]
  timefull=document.getElementById("timefull");
  weekday:string=this.day[this.daynum];
  
  constructor() {
    this.timeupdate();
    
   }
   addzero(i){
    if(i<10){
    return "0"+i;
    }
    return i;
  } 
timeupdate(){
  setInterval(function(){
    this.today=new Date();
this.sec=this.today.getSeconds();
this.sec=this.sec<10?"0"+this.sec:this.sec;
this.minuts=this.today.getMinutes();

this.minuts=this.minuts<10?"0"+this.minuts:this.minuts;;
this.hr=this.today.getHours();
this.amp=this.hr>12?"pm":"am";
this.hr=this.hr>12?this.hr-12:this.hr;

this.timeshow=this.hr+":"+this.minuts +":"+this.sec;
if(this.timefull)
this.timefull.innerHTML=this.timeshow+this.amp;
// console.log(this.timeshow)

  },1000);
}

  ngOnInit() {
    
  }
 


}
