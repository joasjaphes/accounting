import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from './shared/shared.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';

@NgModule({
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {subscriptSizing: 'dynamic'}}
  ],
  declarations: [AppComponent, WelcomeComponent, RegistrationComponent, LoginComponent],
  imports: [CommonModule, AppRoutingModule, BrowserModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
