import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import { iHomeServiceBooking } from '../service/iHomeServiceBooking';
import { HttpClientService,  iHomeServiceBooking} from '../service/http-client.service';

@Component({
  selector: 'app-i-home-service',
  templateUrl: './i-home-service.component.html',
  styleUrls: ['./i-home-service.component.css']
})
export class IHomeServiceComponent implements OnInit {
  iHomeServices: any;

  //iHomeServices: iHomeServiceBooking[];

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(): void {
    this.httpClientService.getBookingSearchCriteria().subscribe(
      response => this.handleSuccessfulResponse (response),
    );
  }

   handleSuccessfulResponse (response: iHomeServiceBooking) {
     this.iHomeServices = response;
   }

}
