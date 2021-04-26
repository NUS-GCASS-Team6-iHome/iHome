package com.ihome.bookingservice.repository;

import com.ihome.bookingservice.entity.IHomeBooking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IHomeBookingRepository extends JpaRepository<IHomeBooking, Integer> {
}
