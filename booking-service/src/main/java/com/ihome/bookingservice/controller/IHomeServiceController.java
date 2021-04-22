package com.ihome.bookingservice.controller;


import com.ihome.bookingservice.entity.IHomeService;
import com.ihome.bookingservice.service.IHomeServiceService;
import dto.IHomeServiceLoaderDTO;
import dto.IHomeServiceSearchDTO;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/iHomeService")
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class IHomeServiceController {

    @Autowired
    private IHomeServiceService iHomeServiceService;

    @PostMapping("/save")
    public IHomeService saveIHomeService(@RequestBody IHomeServiceLoaderDTO iHomeServiceLoaderDTO){
        return iHomeServiceService.save(convertToDto(iHomeServiceLoaderDTO));
    }

    @PostMapping("/getSearchResult")
    public List<IHomeService> getSearchResult(@RequestBody IHomeServiceSearchDTO iHomeServiceSearchDTO){
        List<IHomeService> services = iHomeServiceService.searchByCriteria(iHomeServiceSearchDTO);
        return services;
    }

    @PostMapping("/getServiceToDisplay")
    public List<IHomeService> getServiceToDisplay(@RequestBody IHomeServiceSearchDTO iHomeServiceSearchDTO){
        List<IHomeService> services = iHomeServiceService.searchByCriteria(iHomeServiceSearchDTO);
        return services;
    }

//    @PostMapping("/")
//    public IHomeService findIHomeServiceByUserPreference(@RequestBody IHomeService iHomeService){
//        return iHomeServiceService.findIhomeServiceByUserPreference(iHomeService);
//    }
//
//    @PostMapping("/")
//    public IHomeService deleteIHomeService(@RequestBody IHomeService iHomeService){
//        return iHomeServiceService.delete(iHomeService);
//    }


    // converter
    private IHomeService convertToDto(IHomeServiceLoaderDTO dto) {
        ModelMapper modelMapper = new ModelMapper();
        IHomeService iHomeService = modelMapper.map(dto, IHomeService.class);
        return iHomeService;
    }

}
