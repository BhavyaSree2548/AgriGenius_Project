package com.agrigenius.controller;

import com.agrigenius.dto.DiseaseResponse;
import com.agrigenius.dto.SymptomRequest;
import com.agrigenius.service.DiseaseService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/disease")
public class DiseaseController {
    private final DiseaseService diseaseService;

    public DiseaseController(DiseaseService diseaseService) {
        this.diseaseService = diseaseService;
    }

    @PostMapping("/detect")
    public DiseaseResponse detect(@RequestParam("image") MultipartFile image) {
        return diseaseService.detect(image);
    }

    @PostMapping("/symptoms")
    public DiseaseResponse symptoms(@Valid @RequestBody SymptomRequest request) {
        return diseaseService.detectFromSymptoms(request.getSymptoms());
    }
}
