package com.ihome.customerrating.repository;

import com.ihome.customerrating.entity.CustomerRating;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface CustomerRatingRepository extends JpaRepository<CustomerRating, Long>{
    CustomerRating findBycustomerId(Interger customerId);
}
