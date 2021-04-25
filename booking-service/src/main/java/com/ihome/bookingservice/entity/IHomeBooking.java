package com.ihome.bookingservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="booking")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class IHomeBooking {

    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @Column(name="booking_id", unique = true, length = 20)
    private String bookingID;

    @Column(name="booking_status")
    private String bookingStatus;

    @Column(name="customer_id")
    private int customerID;

    @Column(name="svc_prvd_id")
    private int serviceProviderID;

    @Column(name="booking_datetime")
    private Date bookingDatetime;

    @Column(name="svc_fee")
    private long totalServiceFee;

    @Column(name="svc_id")
    private String serviceID;

    public String getBookingID() {
        return bookingID;
    }

    public void setBookingID(String bookingID) {
        this.bookingID = bookingID;
    }

    public String getBookingStatus() {
        return bookingStatus;
    }

    public void setBookingStatus(String bookingStatus) {
        this.bookingStatus = bookingStatus;
    }

    public int getCustomerID() {
        return customerID;
    }

    public void setCustomerID(int customerID) {
        this.customerID = customerID;
    }

    public int getServiceProviderID() {
        return serviceProviderID;
    }

    public void setServiceProviderID(int serviceProviderID) {
        this.serviceProviderID = serviceProviderID;
    }

    public Date getBookingDatetime() {
        return bookingDatetime;
    }

    public void setBookingDatetime(Date bookingDatetime) {
        this.bookingDatetime = bookingDatetime;
    }

    public long getTotalServiceFee() {
        return totalServiceFee;
    }

    public void setTotalServiceFee(long totalServiceFee) {
        this.totalServiceFee = totalServiceFee;
    }

    public String getServiceID() {
        return serviceID;
    }

    public void setServiceID(String serviceID) {
        this.serviceID = serviceID;
    }
}
