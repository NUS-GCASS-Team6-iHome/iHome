import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Payment {
  constructor(
    public paymentId: string,
    public paymentStatus: string,
    public paymentType: string,
  ) {
  }
}


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  public createPayment(payment: Payment) {
      return this.httpClient.post<Payment>("http://localhost:9001/payment/", payment)
    }
}
