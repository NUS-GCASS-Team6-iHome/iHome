package dto;

public class IHomeServiceLoaderDTO {


    private String serviceName;
    private String serviceDescription;
    private String serviceProviderID;
    private String serviceType;
    private int serviceRate;
    private String serviceRateUnit;
    private String serviceDistrict;

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

    public String getServiceProviderID() {
        return serviceProviderID;
    }

    public void setServiceProviderID(String serviceProviderID) {
        this.serviceProviderID = serviceProviderID;
    }

    public String getServiceType() {
        return serviceType;
    }

    public void setServiceType(String serviceType) {
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

    public String getServiceDistrict() {
        return serviceDistrict;
    }

    public void setServiceDistrict(String serviceDistrict) {
        this.serviceDistrict = serviceDistrict;
    }
}
