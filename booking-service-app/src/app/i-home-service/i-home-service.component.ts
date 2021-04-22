import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpClientService,  iHomeServiceBooking} from '../service/http-client.service';
import { Options, LabelType } from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-i-home-service',
  templateUrl: './i-home-service.component.html',
  styleUrls: ['./i-home-service.component.css']
})


export class IHomeServiceComponent implements OnInit {
  iHomeServices: any;
  searchCriteria!: iHomeServiceBooking;
  serviceTypes: {[key: string]: string} = {
    "AC": "Aircon Cleaning Service",
    "AR": "Aircon Troubleshooting and Repair Service",
    "AW": "Aircon Wall-mounted  Service",
    "HC": "House Cleaning Service",
    "PS": "Painting Service",
    "PW": "Plumbing Works Service",
    "EW": "Electrical Works Service"
  };

  minValue: number = 0;
  maxValue: number = 900;

  options: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min price:</b> $" + value;
        case LabelType.High:
          return "<b>Max price:</b> $" + value;
        default:
          return "$" + value;
      }
    }
  };

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(): void {
    // this.httpClientService.getBookingSearchCriteria().subscribe(
    //   response => this.handleSuccessfulResponse (response),
    // );
    this.httpClientService.getBookingSearchCriteria().subscribe(
      response => this.handleSuccessfulResponse (response),
    );
  }

  search(){
    
  }

   handleSuccessfulResponse (response: iHomeServiceBooking) {
     this.iHomeServices = response;
   }

}
