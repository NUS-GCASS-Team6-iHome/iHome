import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SearchBookingService, IHomeService } from '../service/search-booking.service';


@Component({
  selector: 'app-ihome-booking',
  templateUrl: './ihome-booking.component.html',
  styleUrls: ['./ihome-booking.component.scss']
})
export class IhomeBookingComponent implements OnInit {

  bookingService: IHomeService;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.bookingService = params['service']);
  }

}
