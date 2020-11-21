import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'signIn',
    component: SigninComponent
  },
  {
    path: 'signUp',
    component: SignupComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
]





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    SpinnerComponent,
    ProfileComponent,
    PostsComponent,
    
   
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
