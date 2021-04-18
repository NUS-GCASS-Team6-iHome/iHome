import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IHomeServiceComponent } from './i-home-service/i-home-service.component';

const routes: Routes = [
  {path:'iHomeService', component:IHomeServiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
