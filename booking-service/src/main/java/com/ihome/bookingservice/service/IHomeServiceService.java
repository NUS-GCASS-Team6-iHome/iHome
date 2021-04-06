package com.ihome.bookingservice.service;

import com.ihome.bookingservice.entity.IHomeService;
import com.ihome.bookingservice.repository.IHomeServiceRepository;
import dto.iHomeServiceLoaderDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IHomeServiceService {

    @Autowired
    private IHomeServiceRepository iHomeServiceRepository;

    public IHomeService save(IHomeService iHomeService) {
        return iHomeServiceRepository.save(iHomeService);
    }
}
