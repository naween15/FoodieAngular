import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
// import { NgxStarRatingModule } from 'ngx-star-rating';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagsComponent } from './components/tags/tags.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { FooddetailsComponent } from './components/fooddetails/fooddetails.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    FooddetailsComponent,
    LoginComponent,
    SigninComponent,
    PageNotFoundComponent,
    ForgotPasswordComponent
  ],
  imports: [
    // NgxStarRatingModule,
    RatingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
