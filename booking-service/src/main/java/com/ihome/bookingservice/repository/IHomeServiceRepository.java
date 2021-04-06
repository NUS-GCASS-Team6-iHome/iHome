package com.ihome.bookingservice.repository;

import com.ihome.bookingservice.entity.IHomeService;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface IHomeServiceRepository extends JpaRepository<IHomeService, Long>{
}
