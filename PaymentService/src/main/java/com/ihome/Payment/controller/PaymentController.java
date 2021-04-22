package com.ihome.Payment.controller;

import com.ihome.Payment.entity.Payment;
import com.ihome.Payment.service.PaymentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payments")
@Slf4j
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/")
    public Payment savePayment(@RequestBody Payment payment) {
        log.info("PaymentController savePayment()");
        return paymentService.savePayment(payment);
    }

    @GetMapping("/{id}")
    public Payment findPaymentById(@PathVariable("id") Long paymentId) {
        log.info("PaymentController findPaymentById()");
        return paymentService.findPaymentById(paymentId);
    }
}