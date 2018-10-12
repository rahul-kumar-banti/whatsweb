
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
import { ContactCallComponent } from './contact-call/contact-call.component';
import { ContactModule } from './contact-call/contact.module';
import { ContactHeaderComponent } from './contact-call/contact-header/contact-header.component';
const routes:Routes=[
  {path:"home", component:MobileComponent},
  {path:"camera",component:CameraScreenComponent},
  {path:"whatsapp",component:WhatsappComponent,
},
// {path:"contact",component:ContactCallComponent}

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
    CameraScreenComponent,
    ContactCallComponent,
    ContactHeaderComponent,
    
    
  ],
  imports: [
    BrowserModule,
    WhatsappModuleModule,
    ContactModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
