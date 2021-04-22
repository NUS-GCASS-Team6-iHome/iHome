import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService, Payment } from '../service/payment.service'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  payment : Payment = new Payment('', '', '');

  constructor(
      private paymentService: PaymentService,
      private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitPayment(): void {
      this.paymentService.createPayment(this.payment)
          .subscribe( data => {
            this.router.navigate(['register-success'])
          });

    };

}
