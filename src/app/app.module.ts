import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MobileComponent } from './mobile/mobile.component';
import { HeadbarComponent } from './headbar/headbar.component';
import { HomecontrolComponent } from './homecontrol/homecontrol.component';
import { HomedateshowComponent } from './homedateshow/homedateshow.component';
import { CameraScreenComponent } from './camera-screen/camera-screen.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { CameraComponent } from './whatsapp/camera/camera.component';
import { ChatComponent } from './whatsapp/chat/chat.component';
import { StatusComponent } from './whatsapp/status/status.component';
import { CallingComponent } from './whatsapp/calling/calling.component';
import { Routes, RouterModule } from '@angular/router';
const routes:Routes=[
  {path:"home", component:MobileComponent},
  {path:"camera",component:CameraScreenComponent},
  {path:"whatsapp",component:WhatsappComponent,
children:[
  {path:"whatscam",component:CameraComponent},
  {path:"chat", component:ChatComponent},
  {
    path:"status",component:StatusComponent
  },
  {path:"whatscalling",component:CallingComponent},{
    path:"",component:ChatComponent
  }
]
},
  {path:" ",component:MobileComponent},
  {path:"**",component:MobileComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileComponent,
    HeadbarComponent,
    HomecontrolComponent,
    HomedateshowComponent,
    CameraScreenComponent,
    WhatsappComponent,
    CameraComponent,
    ChatComponent,
    StatusComponent,
    CallingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
