package com.ihome.rating.service;

import com.ihome.rating.entity.Rating;
import com.ihome.rating.repository.RatingRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class RatingService {

    @Autowired
    private RatingRepository ratingRepository;

    public Rating saveRating(Rating rating) {
        log.info("RatingService saveRating()");
        return ratingRepository.save(rating);
    }

    public List<Rating> findByServiceid(String serviceId) {
        log.info("RatingService findByServiceid()");
        return ratingRepository.findByServiceid(serviceId);
    }
}
