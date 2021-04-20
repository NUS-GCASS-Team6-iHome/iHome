import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home';
import { RegisterComponent } from './register';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-guard.service';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: AccountComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]},

  // otherwise redirect to home
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
