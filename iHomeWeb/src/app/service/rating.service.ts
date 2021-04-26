import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IHomeService } from './search-booking.service';

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
  private selectedService = new IHomeService('', '', '', '', '', 0, '');
  constructor(private httpClient: HttpClient) { }

  public createRating(rating: Rating) {
    return this.httpClient.post<Rating>("http://localhost:9002/rating/", rating)
  }

  setSelectedService(service: IHomeService) {
    this.selectedService = service;
  }

  getSelectedService() {
    return this.selectedService;
  }
}
