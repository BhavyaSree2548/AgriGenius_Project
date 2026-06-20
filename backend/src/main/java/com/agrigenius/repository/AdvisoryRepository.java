package com.agrigenius.repository;

import com.agrigenius.entity.Advisory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdvisoryRepository extends JpaRepository<Advisory, Long> {
    Optional<Advisory> findFirstBySoilTypeIgnoreCaseAndSeasonIgnoreCaseAndCropIgnoreCase(
            String soilType,
            String season,
            String crop
    );
}
