package com.ihome.bookingservice.controller;


import com.ihome.bookingservice.entity.IHomeBooking;
import com.ihome.bookingservice.entity.IHomeService;
import com.ihome.bookingservice.service.IHomeBookingService;
import com.ihome.bookingservice.service.IHomeServiceService;
import dto.IHomeBookingDTO;
import dto.IHomeServiceLoaderDTO;
import dto.IHomeServiceSearchDTO;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/iHomeService")
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class IHomeServiceController {

    @Autowired
    private IHomeServiceService iHomeServiceService;

    @Autowired
    private IHomeBookingService iHomeBookingService;

    @PostMapping("/save")
    public IHomeService saveIHomeService(@RequestBody IHomeServiceLoaderDTO iHomeServiceLoaderDTO){
        return iHomeServiceService.save(convertToDto(iHomeServiceLoaderDTO));
    }

    @PostMapping("/getSearchResult")
    public List<IHomeService> getSearchResult(@RequestBody IHomeServiceSearchDTO iHomeServiceSearchDTO){
        List<IHomeService> services = iHomeServiceService.searchByCriteria(iHomeServiceSearchDTO);
        return services;
    }

    @PostMapping("/saveBooking")
    public IHomeBooking saveIHomeBooking(@RequestBody IHomeBookingDTO iHomeBookingDTO){
        return iHomeBookingService.save(convertToBookingDto(iHomeBookingDTO));
    }

    @GetMapping(value = "/getBookingList/{customerID}")
    public ResponseEntity<List<IHomeBooking>> getBookingList(@PathVariable int customerID){
        log.info("IHomeServiceController getBookingList()");
        // return iHomeBookingService.getBookingsByCustomerID(customerID);
        return ResponseEntity.ok(iHomeBookingService.getBookingsByCustomerID(customerID));
    }

    private IHomeBooking convertToBookingDto(IHomeBookingDTO iHomeBookingDTO) {
        ModelMapper modelMapper = new ModelMapper();
        IHomeBooking iHomeBooking = modelMapper.map(iHomeBookingDTO, IHomeBooking.class);
        return iHomeBooking;
    }

//    @GetMapping("/getService")
//    public IHomeService getServiceToDisplay( @RequestParam("serviceID") String serviceID){
//        IHomeService services = iHomeServiceService.getService(serviceID);
//        return services;
//    }

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
