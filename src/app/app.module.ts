import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ToastrModule, ToastNoAnimationModule, ToastContainerModule, } from 'ngx-toastr';
import { NgxOtpInputModule } from 'ngx-otp-input'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerDirective } from './date-picker.directive';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DatePickerDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
    ToastContainerModule,
    NgxOtpInputModule,
    NgbModule,
    FormsModule, ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
