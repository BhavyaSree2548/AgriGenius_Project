package com.agrigenius.service;

import com.agrigenius.dto.AdvisoryRequest;
import com.agrigenius.dto.AdvisoryResponse;
import com.agrigenius.entity.Advisory;
import com.agrigenius.repository.AdvisoryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdvisoryService implements CommandLineRunner {
    private final AdvisoryRepository advisoryRepository;

    public AdvisoryService(AdvisoryRepository advisoryRepository) {
        this.advisoryRepository = advisoryRepository;
    }

    public AdvisoryResponse suggest(AdvisoryRequest request) {
        return advisoryRepository.findFirstBySoilTypeIgnoreCaseAndSeasonIgnoreCaseAndCropIgnoreCase(
                        request.getSoilType(),
                        request.getSeason(),
                        request.getCrop())
                .map(this::toResponse)
                .orElseGet(() -> generatedAdvice(request));
    }

    private AdvisoryResponse toResponse(Advisory advisory) {
        return new AdvisoryResponse(
                advisory.getSuitableCrops(),
                advisory.getFertilizers(),
                advisory.getIrrigationTips()
        );
    }

    private AdvisoryResponse generatedAdvice(AdvisoryRequest request) {
        String soil = request.getSoilType().toLowerCase();
        String season = request.getSeason().toLowerCase();
        String crop = request.getCrop();

        String suitable = switch (soil) {
            case "black" -> "Cotton, soybean, sorghum, pulses, and " + crop;
            case "red" -> "Groundnut, millets, pulses, tomato, and " + crop;
            case "alluvial" -> "Rice, wheat, sugarcane, maize, vegetables, and " + crop;
            case "sandy" -> "Watermelon, groundnut, pearl millet, guar, and " + crop;
            default -> "Rice, maize, pulses, vegetables, and " + crop;
        };

        String fertilizer = season.equals("kharif")
                ? "Use compost before sowing, balanced NPK after establishment, and neem-coated urea in split doses."
                : "Use farmyard manure, phosphorus-rich basal fertilizer, and light nitrogen top dressing during active growth.";

        String irrigation = soil.equals("sandy")
                ? "Irrigate in shorter, more frequent cycles and mulch to reduce evaporation."
                : "Keep soil moist but not waterlogged; schedule irrigation early morning and reduce watering after rainfall.";

        return new AdvisoryResponse(suitable, fertilizer, irrigation);
    }

    @Override
    public void run(String... args) {
        if (advisoryRepository.count() > 0) {
            return;
        }

        List<Advisory> seedData = List.of(
                advisory("Black", "Kharif", "Cotton", "Cotton, soybean, pigeon pea",
                        "Farmyard manure, 60:30:30 NPK, neem-coated urea in split doses",
                        "Deep irrigation every 7-10 days; avoid standing water near roots"),
                advisory("Alluvial", "Rabi", "Wheat", "Wheat, mustard, potato, chickpea",
                        "Compost, DAP at sowing, nitrogen top dressing at crown root stage",
                        "First irrigation 20-25 days after sowing, then at tillering and grain filling"),
                advisory("Red", "Kharif", "Groundnut", "Groundnut, millets, pulses, castor",
                        "Gypsum at pegging, rhizobium seed treatment, light potash",
                        "Maintain steady moisture during flowering and pod formation"),
                advisory("Sandy", "Summer", "Watermelon", "Watermelon, muskmelon, pearl millet",
                        "Compost, slow-release NPK, micronutrient spray when vines spread",
                        "Use drip irrigation and mulch; water frequently in small doses")
        );
        advisoryRepository.saveAll(seedData);
    }

    private Advisory advisory(String soilType,
                              String season,
                              String crop,
                              String suitableCrops,
                              String fertilizers,
                              String irrigationTips) {
        Advisory advisory = new Advisory();
        advisory.setSoilType(soilType);
        advisory.setSeason(season);
        advisory.setCrop(crop);
        advisory.setSuitableCrops(suitableCrops);
        advisory.setFertilizers(fertilizers);
        advisory.setIrrigationTips(irrigationTips);
        return advisory;
    }
}
