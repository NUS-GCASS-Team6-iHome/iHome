import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'iHomeWeb';
  constructor(public loginService:AuthenticationService){ }
  ngOnInit() {
  }
}
