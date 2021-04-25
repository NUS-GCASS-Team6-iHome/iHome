import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RatingService, Rating } from '../service/rating.service'

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  rating: Rating = new Rating('', '', '', '');
  constructor(
    private ratingService: RatingService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.ratingService.createRating(this.rating)
      .subscribe(data => {
       this.router.navigate(['register-success'])
     });
  }
}

