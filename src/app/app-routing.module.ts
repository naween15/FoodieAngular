import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { FooddetailsComponent } from './components/fooddetails/fooddetails.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchComponent } from './components/search/search.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchItem',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'food/:id',component:FooddetailsComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'login',component:LoginComponent},
  {path:'signin',component:SigninComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'admin',
  canActivate:[AuthGuard],
loadChildren:()=>import('./modules/admin/admin.module').then((m)=>m.AdminModule),},
{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
