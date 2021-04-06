package com.ihome.bookingservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name="service")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class IHomeService {

    @Id @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @Column(name="SVC_ID", unique = true, length = 20)
    private String serviceID;
    @Column(name="SVC_NAM")
    private String serviceName;
    @Column(name="SVC_DESC")
    private String serviceDescription;
    @Column(name="SVC_PRVD_ID")
    private Integer serviceProviderID;
    @Column(name="SVC_TYPE")
    private String serviceType;
    @Column(name="SVC_RATE")
    private Integer serviceRate;
    @Column(name="SVC_RATE_UNIT")
    private String serviceRateUnit;

    public String getServiceID() {
        return serviceID;
    }

    public void setServiceID(String serviceID) {
        this.serviceID = serviceID;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public String getServiceDescription() {
        return serviceDescription;
    }

    public void setServiceDescription(String serviceDescription) {
        this.serviceDescription = serviceDescription;
    }

    public Integer getServiceProviderID() {
        return serviceProviderID;
    }

    public void setServiceProviderID(Integer serviceProviderID) {
        this.serviceProviderID = serviceProviderID;
    }

    public String getServiceType() {
        return serviceType;
    }

    public void setServiceType(String serviceType) {
        this.serviceType = serviceType;
    }

    public Integer getServiceRate() {
        return serviceRate;
    }

    public void setServiceRate(Integer serviceRate) {
        this.serviceRate = serviceRate;
    }

    public String getServiceRateUnit() {
        return serviceRateUnit;
    }

    public void setServiceRateUnit(String serviceRateUnit) {
        this.serviceRateUnit = serviceRateUnit;
    }
}
