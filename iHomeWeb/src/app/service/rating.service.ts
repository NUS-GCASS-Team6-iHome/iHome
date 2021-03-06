import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IHomeService } from './search-booking.service';
import { IHomeBooking } from './booking-service.service';

export class Rating {
  constructor(
    public accountid: string,
    public serviceid: string,
    public rating: string,
    public comment: string
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private selectedBooking = new IHomeBooking('', '', '', '', '', '', '');
  private ratingList: Rating[];
  isBackFromViewRating = false;
  constructor(private httpClient: HttpClient) { }

  public createRating(rating: Rating) {
    return this.httpClient.post<Rating>("http://13.213.29.113:8098/rating/", rating)
  }

  getRatingList(serviceId: string) {
    return this.httpClient.get<Rating[]>("http://13.213.29.113:8098/rating/" + serviceId);
  }


  setSelectedBooking(booking: IHomeBooking) {
    this.selectedBooking = booking;
  }

  getSelectedBooking() {
    return this.selectedBooking;
  }

  setSelectedRatingList(ratingList: Rating[]) {
    this.ratingList = ratingList;
  }

  getSelectedRatingList() {
    return this.ratingList;
  }

  setIsBackFromViewRating(status: boolean) {
    this.isBackFromViewRating = status;
  }

  getIsBackFromViewRating() {
    return this.isBackFromViewRating;
  }
}
