import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home';
import { RegisterComponent } from './register';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule } from '@angular/forms';
import { RegisterSuccessComponent } from './register/register-success.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { IhomeBookingServiceComponent } from './ihome-booking-service/ihome-booking-service.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { IhomeBookingComponent } from './ihome-booking/ihome-booking.component';
import { RatingComponent } from './rating/rating.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { RatingSuccessComponent } from './rating/rating-success.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    HomeComponent,
    RegisterComponent,
    LogoutComponent,
    RegisterSuccessComponent,
    ProfileComponent,
    PaymentComponent,
    IhomeBookingServiceComponent,
    IhomeBookingComponent,
    RatingComponent,
    BookingSummaryComponent,
    RatingSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
