package com.ihome.bookingservice.repository;

import com.ihome.bookingservice.entity.IHomeBooking;
import com.ihome.bookingservice.entity.IHomeService;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IHomeBookingRepository extends JpaRepository<IHomeBooking, Integer> {
    public List<IHomeBooking> findByCustomerID(String customerID);
}
