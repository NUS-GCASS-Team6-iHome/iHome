import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rating, RatingService } from '../service/rating.service';
@Component({
  selector: 'app-view-service-rating',
  templateUrl: './view-service-rating.component.html'
})
export class ViewServiceRatingComponent implements OnInit {

ratingList: Rating[];
  constructor(
      private ratingService: RatingService,
      private router: Router
  ) { }

  ngOnInit() {
      this.ratingList = this.ratingService.getSelectedRatingList();
  }

  back() {
      this.ratingService.setIsBackFromViewRating(true);
      this.router.navigate(['iHomeService']);
  }

}