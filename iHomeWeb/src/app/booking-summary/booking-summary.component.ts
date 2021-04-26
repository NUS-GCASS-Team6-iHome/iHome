import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IHomeService, SearchBookingService } from '../service/search-booking.service';
@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.scss']
})
export class BookingSummaryComponent implements OnInit {
  serviceList: IHomeService[];
  constructor(
    private bookingService: SearchBookingService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  rate(product) {

  }

}
