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
    // @Column(name="SVC_PRVD_ID")
    @ManyToOne(fetch=FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "SVC_PRVD_ID", referencedColumnName = "ACCOUNTID")
    private Account serviceProviderID;
    @Column(name="SVC_TYPE")
    @Enumerated(EnumType.STRING)
    private ServiceType serviceType;
    @Column(name="SVC_RATE")
    private int serviceRate;
    @Column(name="SVC_RATE_UNIT")
    private String serviceRateUnit;
    @Column(name="DISTRICT")
    private String district;

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

    public Account getServiceProviderID() {
        return serviceProviderID;
    }

    public void setServiceProviderID(Account serviceProviderID) {
        this.serviceProviderID = serviceProviderID;
    }

    public ServiceType getServiceType() {
        return serviceType;
    }

    public void setServiceType(ServiceType serviceType) {
        this.serviceType = serviceType;
    }

    public int getServiceRate() {
        return serviceRate;
    }

    public void setServiceRate(int serviceRate) {
        this.serviceRate = serviceRate;
    }

    public String getServiceRateUnit() {
        return serviceRateUnit;
    }

    public void setServiceRateUnit(String serviceRateUnit) {
        this.serviceRateUnit = serviceRateUnit;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }
}
