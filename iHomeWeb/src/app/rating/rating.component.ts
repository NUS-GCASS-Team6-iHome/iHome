import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServiceService } from '../service/account-service.service';
import { IHomeBooking } from '../service/booking-service.service';
import { RatingService, Rating } from '../service/rating.service'

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  rating: Rating = new Rating('', '', '', '');
  selectedBooking = new IHomeBooking('', '', '', '','', '', '');
  constructor(
    private ratingService: RatingService,
    private accountService: AccountServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.selectedBooking = this.ratingService.getSelectedBooking();
  }

  create(): void {
    this.rating.accountid = this.accountService.getLoginAccount().accountid;
    this.rating.serviceid = this.selectedBooking.serviceID;
    this.ratingService.createRating(this.rating)
      .subscribe(data => {
       this.router.navigate(['rating-success'])
     });
  }
}

