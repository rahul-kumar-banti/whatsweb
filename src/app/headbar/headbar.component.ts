import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.css']
})
export class HeadbarComponent implements OnInit {
  @Input() headercolor:string;
  constructor() { }

  ngOnInit() {
  }

}
