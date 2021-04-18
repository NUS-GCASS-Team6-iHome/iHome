package com.ihome.bookingservice.repository;

import com.ihome.bookingservice.entity.IHomeService;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

@Repository
public interface IHomeServiceRepository extends JpaRepository<IHomeService, Integer>{
    @Query("select u FROM IHomeService u where u.district = :district and u.serviceType=:serviceType and u.serviceRate <= :maxBudget and u.serviceRate >= :minBudget")
    public List<IHomeService> findAllByDistrictAndServiceTypeAndBudget(@Param("district") String district, @Param("serviceType") String serviceType, @Param("minBudget") int minBudget, @Param("maxBudget") int maxBudget );

}
