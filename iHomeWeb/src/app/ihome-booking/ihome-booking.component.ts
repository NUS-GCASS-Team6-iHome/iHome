import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AccountServiceService } from '../service/account-service.service';
import { BookingServiceService, IHomeBooking, searchCriteria } from '../service/booking-service.service';
import { SearchBookingService, IHomeService } from '../service/search-booking.service';


@Component({
  selector: 'app-ihome-booking',
  templateUrl: './ihome-booking.component.html',
  styleUrls: ['./ihome-booking.component.scss']
})
export class IhomeBookingComponent implements OnInit {

  bookingServiceID !: string;
  bookingService: IHomeService;
  bookingDetails = new IHomeBooking('', '', '', '', '', '', '');
  quantity = 0;
  constructor(
    private searchBookings: SearchBookingService,
    private accountService: AccountServiceService,
    private bookService: BookingServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.bookingServiceID = params['service']);
    // get service info
    this.bookingService = this.searchBookings.getServiceDetails();
    this.bookingDetails.customerID = this.accountService.getLoginAccount().accountid;
    this.bookingDetails.serviceProviderID = this.bookingService.serviceProviderID.accountid;
    this.bookingDetails.serviceID = this.bookingService.serviceID;
    console.log(this.bookingService);

    // this.searchBookings.getServiceDetails(this.bookingServiceID).subscribe(
    //   data => {
    //     console.log(data);
    //     this.bookingService = data;

    //   }
    // )
    
  }

  onQuantityChange() {
    this.bookingDetails.totalServiceFee = (this.bookingService.serviceRate * this.quantity) + '';
  }

  book() {
    this.bookService.booking(this.bookingDetails)
        .subscribe(data => {
          this.bookService.setBookingDetails(this.bookingDetails);
          this.router.navigate(['payment'])
        });
  }

}
