import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home';
import { RegisterComponent } from './register';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-guard.service';
import { RegisterSuccessComponent } from './register/register-success.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { IhomeBookingServiceComponent } from './ihome-booking-service/ihome-booking-service.component';
import { IhomeBookingComponent } from './ihome-booking/ihome-booking.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { RatingComponent } from './rating/rating.component';
import { RatingSuccessComponent } from './rating/rating-success.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: AccountComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register-success', component: RegisterSuccessComponent},
  {path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]},
  {path: 'profile', component: ProfileComponent,canActivate:[AuthGaurdService]},
  {path: 'payment', component: PaymentComponent},
  {path: 'iHomeService', component: IhomeBookingServiceComponent},
  {path: 'iHomeService/book/:id', component: IhomeBookingComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'booking-summary', component: BookingSummaryComponent},
  {path: 'rating', component: RatingComponent},
  {path: 'rating-success', component: RatingSuccessComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
