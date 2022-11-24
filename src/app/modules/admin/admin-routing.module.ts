import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainComponent } from './components/main/main.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [
  {path:'',component:AdminDashboardComponent,
  children: [
    { path: 'home', component: MainComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServiceComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
