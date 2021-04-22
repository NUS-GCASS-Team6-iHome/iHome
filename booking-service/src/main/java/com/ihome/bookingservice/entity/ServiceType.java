package com.ihome.bookingservice.entity;

public enum ServiceType {
    AC ("Aircon Cleaning Service"),
    AR ("Aircon Troubleshooting and Repair Service"),
    AW ("Aircon Wall-mounted  Service"),
    HC ("House Cleaning Service"),
    PS ("Paining Service"),
    PW ("Plumbing Works Service"),
    EW ("Electrical Works Service");

    public final String service;
    private ServiceType(String service) {
        this.service = service;
    }

}
