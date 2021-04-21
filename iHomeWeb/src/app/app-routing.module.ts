import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home';
import { RegisterComponent } from './register';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-guard.service';
import { RegisterSuccessComponent } from './register/register-success.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: AccountComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register-success', component: RegisterSuccessComponent,canActivate:[AuthGaurdService]},
  {path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]},
  {path: 'profile', component: ProfileComponent,canActivate:[AuthGaurdService]},

  // otherwise redirect to home
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
