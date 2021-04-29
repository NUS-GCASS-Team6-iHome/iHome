import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServiceService } from '../service/account-service.service';
import { IHomeBooking } from '../service/booking-service.service';
import { RatingService } from '../service/rating.service';
import { SearchBookingService } from '../service/search-booking.service';
@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.scss']
})
export class BookingSummaryComponent implements OnInit {
  serviceList: IHomeBooking[];
  accountId = '';
  constructor(
    private bookingService: SearchBookingService,
    private router: Router,
    private accountService: AccountServiceService,
    private ratingService: RatingService) { }

  ngOnInit(): void {
    this.accountId = this.accountService.getLoginAccount().accountid;
    this.bookingService.getBookingList(this.accountId).subscribe(
      response => this.handleGetBookingListSuccess(response),
    );

    // const temp = new IHomeService('1', 'aircon', 'aircon cleaning service', '1', 'cleaning', 10, 'hour');
    // this.serviceList = [temp];
    // this.ratingService.setSelectedService(temp);
  }

  handleGetBookingListSuccess(response: IHomeBooking[]) {
    this.serviceList = response;
  }
  Rate(item: IHomeBooking){
    this.ratingService.setSelectedBooking(item);
    this.router.navigate(['rating'])
  }
}
