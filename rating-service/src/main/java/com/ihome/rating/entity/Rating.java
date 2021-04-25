package com.ihome.rating.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ratingid;
    private String accountid;
    private String serviceid;
    private String rating;
    private String comment;
}
