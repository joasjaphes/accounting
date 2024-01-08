import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';
// import { BrowserModule } from '@angular/platform-browser';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from './shared/shared.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store';
import { effects } from './store/effects';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { subscriptSizing: 'dynamic' },
    },
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    BrowserModule,
    StoreModule.forRoot(
      reducers,
      {
        metaReducers: [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot(effects),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
