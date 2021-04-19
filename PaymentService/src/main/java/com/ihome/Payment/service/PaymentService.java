package com.ihome.Payment.service;

import com.ihome.Payment.entity.Payment;
import com.ihome.Payment.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public Payment savePayment(Payment payment){

        return paymentRepository.save(payment);
    }

    public Payment findPaymentById(Long paymentId) {

        return paymentRepository.findByPaymentId(paymentId);
    }
}
