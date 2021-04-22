import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

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
export class BookingServiceService {

  constructor(private httpClient: HttpClient
  ) {}

  search(searchCriteria: searchCriteria){
    // console.log("search");
    // return this.httpClient.post<searchCriteria>('http://localhost:8081/getSearchResult', )
  }
}
