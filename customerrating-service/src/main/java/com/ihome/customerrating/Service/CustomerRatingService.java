package com.ihome.customerrating.service;

import com.ihome.customerrating.entity.CustomerRating;
import com.ihome.customerrating.repository.CustomerRatingRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class CustomerRatingService {

    @Autowired
    private CustomerRatingRepository customerRatingRepository;

    public CustomerRating saveCustomerRating(CustomerRating customerRating) {
        log.info("CustomerRatingService saveCustomerRating()");
        return customerRatingRepository.save(customerRating);
    }

    public CustomerRating findByCustomerId(Integer customerId) {
        log.info("CustomerRatingService findCustomerById()");
        return customerRatingRepository.findByCustomerId(customerId);
    }
}