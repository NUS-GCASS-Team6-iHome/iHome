package com.ihome.rating.service;

import com.ihome.rating.entity.Rating;
import com.ihome.rating.repository.RatingRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class RatingService {

    @Autowired
    private RatingRepository ratingRepository;

    public Rating saveRating(Rating rating) {
        log.info("RatingService saveRating()");
        return ratingRepository.save(rating);
    }
}
