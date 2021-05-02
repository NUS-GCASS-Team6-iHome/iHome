import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService, Payment } from '../service/payment.service';
import { AccountServiceService } from '../service/account-service.service';
import { IHomeBooking } from '../service/booking-service.service';
import { BookingServiceService } from '../service/booking-service.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  payment : Payment = new Payment('', '', '' ,'','', 0);
  accountId = '';
  creditCardNum = '';
  promoCode = '';
  isDisabled = false;
  booking : IHomeBooking = new IHomeBooking('','','','','','','');

  constructor(
      private paymentService: PaymentService,
      private router: Router,
      private accountService: AccountServiceService,
      private bookingService: BookingServiceService
  ) { }

  ngOnInit(): void {
  this.accountId = this.accountService.getLoginAccount().accountid;
  this.booking = this.bookingService.getBookingDetails();
  this.payment.totalAmount = Number(this.booking.totalServiceFee);
  this.payment.bookingId = this.booking.bookingID;
  }

  calcDiscountedPrice(): void{
    if(this.promoCode === 'ihome20'){
      this.payment.totalAmount = this.payment.totalAmount*0.8;
      this.isDisabled = true;
      console.log('TotalAmt : ' + this.payment.totalAmount);
    }
    else{
      alert('Invalid Promotion Code');
    }

  }

  submitPayment(): void {
  console.log(this.payment);
  this.payment.accountId = this.accountService.getLoginAccount().accountid;
  this.payment.paymentStatus = 'S';
      this.paymentService.createPayment(this.payment)
          .subscribe( data => {
            this.router.navigate(['payment-success'])
          });

    };

}
