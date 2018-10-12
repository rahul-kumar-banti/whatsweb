import { ContactCallComponent } from "./contact-call.component";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactsListComponent } from "./contacts-list/contacts-list.component";
import { ContactHeaderComponent } from "./contact-header/contact-header.component";
import { ContactLogsComponent } from "./contact-logs/contact-logs.component";
import { ContactFebComponent } from "./contact-feb/contact-feb.component";
import { ContactKeypadComponent } from "./contact-keypad/contact-keypad.component";

const routes: Routes = [
  {
    path: "contact",
    component: ContactCallComponent,
    children:[{
      path:"list", component:ContactsListComponent

    },
  {
    path:"log",component:ContactLogsComponent
  },
  {
    path:'fev',component:ContactFebComponent
  },
  {
    path:'keypad',component:ContactKeypadComponent
  },
  {
    path:'**',redirectTo:'list',pathMatch:'full'
  }
  ]
  }
];
@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
  declarations: [
    ContactsListComponent,
    ContactLogsComponent,
    ContactFebComponent,
    ContactKeypadComponent
  ],
  exports: [HttpClientModule, RouterModule]
})
export class ContactModule {}
