import { CameraScreenComponent } from "./../camera-screen/camera-screen.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WhatsappComponent } from "./whatsapp.component";
import { ChatComponent } from "./chat/chat.component";
import { CameraComponent } from "./camera/camera.component";
import { CallingComponent } from "./calling/calling.component";
import { StatusmodelComponent } from "./shared/statusmodel/statusmodel.component";
import { StatusComponent } from "./status/status.component";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { HomenotifyService } from "../services/homenotify.service";
import { StatusServicesService } from "../services/status-services.service";
import { ChatService } from "../services/chat.service";
import { UserstateService } from "../services/user/userstate.service";
import { HomeScreenHeaderComponent } from './home-screen-header/home-screen-header.component';
const routes: Routes = [
  {
    path: "whatsapp",
    component: WhatsappComponent,
    children: [
      { path: "", component: ChatComponent, pathMatch: "full" },

      { path: "whatscam", component: CameraComponent },
      { path: "chat", component: ChatComponent },
      {
        path: "status",
        component: StatusComponent
      },
      { path: "whatscalling", component: CallingComponent }
    ]
  }
];
@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
  declarations: [
    WhatsappComponent,
    CameraComponent,
    ChatComponent,
    StatusComponent,
    CallingComponent,
    StatusmodelComponent,
    HomeScreenHeaderComponent

  ],
  providers: [
    UserstateService,
    ChatService,
    StatusServicesService,
    HomenotifyService
  ],
  exports: [HttpClientModule, RouterModule]
})
export class WhatsappModuleModule {}
