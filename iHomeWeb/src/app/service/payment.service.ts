import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Payment {
  constructor(
    public paymentId: string,
    public paymentStatus: string,
    public paymentType: string,
    public accountId: string,
    public bookingId: string,
    public totalAmount: number,
  ) {
  }
}


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  public createPayment(payment: Payment) {
      return this.httpClient.post<Payment>("http://13.213.40.78:8099/payments/", payment)
    }
}
