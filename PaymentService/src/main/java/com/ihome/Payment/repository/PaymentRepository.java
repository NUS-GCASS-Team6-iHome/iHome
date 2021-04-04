package com.ihome.payment.repository;

import com.ihome.account.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {
    Payment findPaymentById(Long paymentId);
}