package com.ihome.rating;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication(scanBasePackages={"com.ihome.rating.service","com.ihome.rating.controller","com.ihome.rating.repository"})
@EntityScan(basePackages = "com.ihome.rating.entity")
public class RatingServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(RatingServiceApplication.class, args);
	}

}
