import { Component, OnInit } from '@angular/core';
import { Rating, RatingService } from '../service/rating.service';
@Component({
  selector: 'app-view-service-rating',
  templateUrl: './view-service-rating.component.html'
})
export class ViewServiceRatingComponent implements OnInit {

ratingList: Rating[];
  constructor(
      private ratingService: RatingService
  ) { }

  ngOnInit() {
      this.ratingList = this.ratingService.getSelectedRatingList();
  }

}