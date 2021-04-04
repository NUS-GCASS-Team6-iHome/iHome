package com.ihome.payment.controller;

import com.ihome.payment.entity.Payment;
import com.ihome.payment.service.PaymentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payment")
@Slf4j
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/")
    public Account savePayment( @RequestBody Payment payment) {
        log.info("PaymentController savePayment()");
        return paymentService.savePayment(payment);
    }

    @GetMapping("/{id}")
    public Payment findPaymentById(@PathVariable("id") Long paymentId) {
        log.info("PaymentController findPaymentById()");
        return paymentService.findPaymentById(paymentId);
    }
}