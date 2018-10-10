import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
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
import { HttpClientModule } from '@angular/common/http';
import { StatusmodelComponent } from './whatsapp/shared/statusmodel/statusmodel.component';
import { UserstateService } from './services/user/userstate.service';
import { ChatService } from './services/chat.service';
import { StatusServicesService } from './services/status-services.service';
import { HomenotifyService } from './services/homenotify.service';
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
    CallingComponent,
    StatusmodelComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserstateService,ChatService,StatusServicesService,HomenotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
