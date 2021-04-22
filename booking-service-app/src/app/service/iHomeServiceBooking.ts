import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

export class iHomeServiceBooking {

  constructor(
    public  serviceType: string,
    public  minBudget: number,
    public  maxBudget: number,
    public  postalCode: string,
  ) { 
    
  }
}

// This is a service class
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getBookingSearchCriteria(){
    console.log("booking page");
    return this.httpClient.get<iHomeServiceBooking>('http://localhost:8081/iHomeServiceBookingWeb')
  }
  getServiceType(){
    console.log("getServiceType");
    return this.httpClient.get<iHomeServiceBooking>('http://localhost:8080/iHomeService/getServiceType')
  }
}
