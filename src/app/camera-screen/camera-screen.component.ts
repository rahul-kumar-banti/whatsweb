import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera-screen',
  templateUrl: './camera-screen.component.html',
  styleUrls: ['./camera-screen.component.css']
})
export class CameraScreenComponent implements OnInit {

  st:any;
  constructor() { }

  ngOnInit() {
    if (navigator.getUserMedia) {
    
    navigator.getUserMedia(
      
        {
          
          video:{ width:600, height: 720 }
        },
    
        // Success Callback
        function(stream) {
          //this.st=stream;
          let vid=document.getElementById('camera-stream') ;
         // document.getElementById('camera-stream').srcObject=stream;
         let vidurl= window.URL.createObjectURL(stream);
         vid.setAttribute("src",vidurl)
         
        },
    
      
        function(err) {
        
          console.log('The following error occurred when trying to use getUserMedia: ' + err);
        }
      );
    
    } else {
      alert('Sorry, your browser does not support getUserMedia');
    }
  }
  //
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  // navigator.getUserMedia({video:false, audio:false},function(f){},function(e){});
    

  }

}
