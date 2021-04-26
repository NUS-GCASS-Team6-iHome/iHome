import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServiceService } from '../service/account-service.service';
import { RatingService, Rating } from '../service/rating.service'
import { IHomeService } from '../service/search-booking.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  rating: Rating = new Rating('', '', '', '');
  selectedService = new IHomeService('', '', '', '', '', 0, '');
  constructor(
    private ratingService: RatingService,
    private accountService: AccountServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.selectedService = this.ratingService.getSelectedService();
  }

  create(): void {
    this.rating.accountid = this.accountService.getLoginAccount().accountid;
    this.rating.serviceid = this.selectedService.serviceID;
    this.ratingService.createRating(this.rating)
      .subscribe(data => {
       this.router.navigate(['rating-success'])
     });
  }
}

