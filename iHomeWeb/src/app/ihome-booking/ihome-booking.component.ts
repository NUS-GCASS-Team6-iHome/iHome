import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { searchCriteria } from '../service/booking-service.service';
import { SearchBookingService, IHomeService } from '../service/search-booking.service';


@Component({
  selector: 'app-ihome-booking',
  templateUrl: './ihome-booking.component.html',
  styleUrls: ['./ihome-booking.component.scss']
})
export class IhomeBookingComponent implements OnInit {

  bookingServiceID !: string;
  bookingService: IHomeService;
  constructor(
    private searchBookings: SearchBookingService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.bookingServiceID = params['service']);
    // get service info
    this.bookingService = this.searchBookings.getServiceDetails();
    console.log(this.bookingService);

    // this.searchBookings.getServiceDetails(this.bookingServiceID).subscribe(
    //   data => {
    //     console.log(data);
    //     this.bookingService = data;

    //   }
    // )
    
  }

}
