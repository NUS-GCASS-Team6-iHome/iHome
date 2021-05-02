package com.ihome.rating.repository;

import com.ihome.rating.entity.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RatingRepository extends JpaRepository<Rating, Integer> {

    List<Rating> findByServiceid(String serviceId);
}
