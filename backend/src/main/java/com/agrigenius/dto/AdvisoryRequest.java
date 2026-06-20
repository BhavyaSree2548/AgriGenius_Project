package com.agrigenius.dto;

import jakarta.validation.constraints.NotBlank;

public class AdvisoryRequest {
    @NotBlank
    private String soilType;

    @NotBlank
    private String season;

    @NotBlank
    private String crop;

    public String getSoilType() {
        return soilType;
    }

    public void setSoilType(String soilType) {
        this.soilType = soilType;
    }

    public String getSeason() {
        return season;
    }

    public void setSeason(String season) {
        this.season = season;
    }

    public String getCrop() {
        return crop;
    }

    public void setCrop(String crop) {
        this.crop = crop;
    }
}
