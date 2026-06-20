package com.agrigenius.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "advisory")
public class Advisory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String soilType;

    @Column(nullable = false)
    private String season;

    @Column(nullable = false)
    private String crop;

    @Column(nullable = false, length = 600)
    private String suitableCrops;

    @Column(nullable = false, length = 600)
    private String fertilizers;

    @Column(nullable = false, length = 600)
    private String irrigationTips;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public String getSuitableCrops() {
        return suitableCrops;
    }

    public void setSuitableCrops(String suitableCrops) {
        this.suitableCrops = suitableCrops;
    }

    public String getFertilizers() {
        return fertilizers;
    }

    public void setFertilizers(String fertilizers) {
        this.fertilizers = fertilizers;
    }

    public String getIrrigationTips() {
        return irrigationTips;
    }

    public void setIrrigationTips(String irrigationTips) {
        this.irrigationTips = irrigationTips;
    }
}
