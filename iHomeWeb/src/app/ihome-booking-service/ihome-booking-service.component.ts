import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBookingService, IHomeService, SearchCriteria } from '../service/search-booking.service';
import { Options, LabelType } from "@angular-slider/ngx-slider";

// class IHomeService {
//   constructor(
//     public serviceID:string,
//     public serviceName: string,
//     public serviceDescription: string,
//     public serviceProviderID: string,
//     public serviceType: string,
//     public serviceRate: number,
//     public serviceRateUnit: string,
//   ) {}
// }

// class SearchCriteria {
//   constructor(
//     public serviceType: string,
//     public minBudget: number,
//     public maxBudget: number,
//     public postalCode: string,
//   ) {}
// }

@Component({
  selector: 'app-ihome-booking-service',
  templateUrl: './ihome-booking-service.component.html',
  styleUrls: ['./ihome-booking-service.component.scss']
})
export class IhomeBookingServiceComponent implements OnInit {

  searchCriteria: SearchCriteria;
  serviceList: IHomeService[];
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
  show: boolean = false
  constructor(
    private searchBookings: SearchBookingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.searchCriteria = new SearchCriteria('', this.minValue, this.maxValue, '' );
  }

  search(searchCriteria: SearchCriteria){
    console.log(searchCriteria);
    this.searchBookings.search(searchCriteria).subscribe(
      data => {
        console.log(data);
        this.show = true;
        this.serviceList = data;

      }
    )
  }
  book(service: IHomeService){
    this.router.navigate(["/iHomeService/book", service.serviceID, service]);
  }

}
