import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-homecontrol',
  templateUrl: './homecontrol.component.html',
  styleUrls: ['./homecontrol.component.css']
})
export class HomecontrolComponent implements OnInit {
@Output() Camopen: EventEmitter<any> = new EventEmitter();
@Output() whatsopen: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
camclicked(){
  this.Camopen.emit("cameraopen");
}
whatsappclick(){
this.whatsopen.emit("whatsappopen");
}
}
