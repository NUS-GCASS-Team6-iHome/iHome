package com.ihome.bookingservice.service;

import com.ihome.bookingservice.entity.IHomeBooking;
import com.ihome.bookingservice.repository.IHomeBookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IHomeBookingService {

    @Autowired
    private IHomeBookingRepository iHomeBookingRepository;

    public IHomeBooking save(IHomeBooking booking) {
        return iHomeBookingRepository.save(booking);
    }

}
