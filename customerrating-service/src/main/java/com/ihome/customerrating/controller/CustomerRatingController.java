package com.ihome.customerrating.controller;

import com.ihome.customerrating.entity.CustomerRating;
import com.ihome.customerrating.service.CustomerRatingService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customerrating")
@Slf4j
public class CustomerRatingController {

    @Autowired
    private CustomerRatingService customerRatingService;

    @PostMapping("/")
    public CustomerRating saveCustomerRating( @RequestBody CustomerRating customerRating) {
        log.info("CustomerRatingController saveCustomerRating()");
        return customerRatingService.saveCustomerRating(customerRating);
    }

    @GetMapping("/{id}")
    public CustomerRating findByCustomerId(@PathVariable("id") Long customerId) {
        log.info("CustomerRatingController findByCustomerId()");
        return customerRatingService.findByCustomerId(customerId);
    }
}