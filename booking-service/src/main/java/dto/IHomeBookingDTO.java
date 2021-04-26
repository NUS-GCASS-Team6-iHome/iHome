package dto;

import javax.persistence.Column;
import java.util.Date;

public class IHomeBookingDTO {

    private String bookingStatus;
    private int customerID;
    private int serviceProviderID;
    private Date bookingDatetime;
    private long totalServiceFee;
    private String serviceID;

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
