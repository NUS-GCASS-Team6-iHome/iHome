import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Account } from './account-service.service';


export class searchCriteria {
  constructor(
    public  serviceType: string,
    public  minBudget: number,
    public  maxBudget: number,
    public  postalCode: string,
  ) {
  }
}
export class serviceResults {
  constructor(
    public  serviceType: string,
    public  minBudget: number,
    public  maxBudget: number,
    public  postalCode: string,
  ) {
  }
}

export class IHomeBooking {
  constructor(
    public  bookingID: string,
    public  serviceProviderID: any,
    public  bookingDatetime: any,
    public  totalServiceFee: string,
    public  bookingStatus: string,
    public  serviceID: string,
    public  customerID: string
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {
  apiPostBooking = 'http://54.255.186.152:8096/iHomeService/saveBooking/';
  bookingDetails = new IHomeBooking('', '', '', '', '', '', '');
  constructor(private httpClient: HttpClient
  ) {}

  setBookingDetails(bookingDetails: IHomeBooking) {
    this.bookingDetails = bookingDetails;
  }

  getBookingDetails() {
    return this.bookingDetails;
  }

  search(searchCriteria: searchCriteria){
    // console.log("search");
     return this.httpClient.post<searchCriteria>('http://54.255.186.152:8096/getSearchResult', searchCriteria)
  }

  public booking(bookingDetails: IHomeBooking) {
    return this.httpClient.post<IHomeBooking>(this.apiPostBooking, bookingDetails)
  }
}
