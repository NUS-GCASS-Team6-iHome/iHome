import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService, Payment } from '../service/payment.service'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  payment : Payment = new Payment('', '', '', 0);

  constructor(
      private paymentService: PaymentService,
      private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitPayment(): void {
  console.log(this.payment);
      this.paymentService.createPayment(this.payment)
          .subscribe( data => {
            this.router.navigate(['register-success'])
          });

    };

}
