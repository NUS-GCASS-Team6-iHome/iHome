package com.ihome.bookingservice.service;

import com.ihome.bookingservice.entity.IHomeService;
import com.ihome.bookingservice.repository.IHomeServiceRepository;
import dto.IHomeServiceSearchDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IHomeServiceService {

    @Autowired
    private IHomeServiceRepository iHomeServiceRepository;

    public IHomeService save(IHomeService iHomeService) {
        return iHomeServiceRepository.save(iHomeService);
    }

    public List<IHomeService> searchByCriteria(IHomeServiceSearchDTO iHomeService) {
        // get district info from the postal code
        String district = iHomeService.getPostalCode().substring(0,2);

        // to get search result
        List<IHomeService> iHomeServiceList = iHomeServiceRepository.findAllByDistrictAndServiceTypeAndBudget(district, iHomeService.getServiceType(), iHomeService.getMinBudget(), iHomeService.getMaxBudget());
        return iHomeServiceList;
    }
}
