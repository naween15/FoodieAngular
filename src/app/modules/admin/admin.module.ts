import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeadComponent } from './components/head/head.component';
import { FootComponent } from './components/foot/foot.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeadComponent,
    FootComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
