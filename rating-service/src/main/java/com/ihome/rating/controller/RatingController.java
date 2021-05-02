package com.ihome.rating.controller;

import com.ihome.rating.entity.Rating;
import com.ihome.rating.service.RatingService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rating")
@Slf4j
public class RatingController {

    @Autowired
    private RatingService ratingService;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/")
    public Rating saveRating(@RequestBody Rating rating) {
        log.info("RatingController saveRating()");
        return ratingService.saveRating(rating);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/{serviceId}")
    public List<Rating> findByServiceId(@PathVariable("serviceId") String serviceId) {
        log.info("RatingController findByServiceId()");
        return ratingService.findByServiceid(serviceId);
    }
}
