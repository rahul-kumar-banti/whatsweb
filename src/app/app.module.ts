import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { MobileComponent } from './mobile/mobile.component';
import { HeadbarComponent } from './headbar/headbar.component';
import { HomecontrolComponent } from './homecontrol/homecontrol.component';
import { HomedateshowComponent } from './homedateshow/homedateshow.component';
import { CameraScreenComponent } from './camera-screen/camera-screen.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WhatsappModuleModule } from './whatsapp/whatsapp-module.module';
const routes:Routes=[
  {path:"home", component:MobileComponent},
  {path:"camera",component:CameraScreenComponent},
  {path:"whatsapp",component:WhatsappComponent,
},
  {path:" ",component:MobileComponent},
  {path:"**",component:MobileComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    HeadbarComponent,
    HomecontrolComponent,
    HomedateshowComponent,
    CameraScreenComponent
    
  ],
  imports: [
    BrowserModule,
    WhatsappModuleModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
