import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IHomeBooking } from './booking-service.service';

export class IHomeService {
  constructor(
    public serviceID:string,
    public serviceName: string,
    public serviceDescription: string,
    public serviceProviderID: string,
    public serviceType: string,
    public serviceRate: number,
    public serviceRateUnit: string,
  ) {}
}

export class SearchCriteria {
  constructor(
    public serviceType: string,
    public minBudget: number,
    public maxBudget: number,
    public postalCode: string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class SearchBookingService {
 
  apiRoot = 'http://localhost:8085/iHomeService/getSearchResult';
  //apiGetDetails = 'http://localhost:8080/iHomeService/getService/${serviceID}';
  apiGetBookingList = 'http://localhost:8085/iHomeService/getBookingList/';
  
  serviceDetail: IHomeService;

  constructor( private http: HttpClient) { 
  }

  search(searchCriteria: any): Observable<any>{
    return this.http.post(this.apiRoot, searchCriteria);
  }

  getBookingList(accountId: string) {
    return this.http.get<IHomeBooking[]>(this.apiGetBookingList + accountId);
  }

  setServiceDetails(item: IHomeService){
   this.serviceDetail = item;
  }
  getServiceDetails(){
    return this.serviceDetail;
   }
}
