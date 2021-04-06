package com.ihome.bookingservice.controller;


import com.ihome.bookingservice.entity.IHomeService;
import com.ihome.bookingservice.service.IHomeServiceService;
import dto.iHomeServiceLoaderDTO;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/iHomeService")
@Slf4j
public class IHomeServiceController {

    @Autowired
    private IHomeServiceService iHomeServiceService;

    @PostMapping("/save")
    public IHomeService saveIHomeService(@RequestBody iHomeServiceLoaderDTO iHomeServiceLoaderDTO){
        return iHomeServiceService.save(convertToDto(iHomeServiceLoaderDTO));
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
    private IHomeService convertToDto(iHomeServiceLoaderDTO dto) {
        ModelMapper modelMapper = new ModelMapper();
        IHomeService iHomeService = modelMapper.map(dto, IHomeService.class);
        return iHomeService;
    }

}
