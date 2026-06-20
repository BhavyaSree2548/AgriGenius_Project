package com.agrigenius.controller;

import com.agrigenius.dto.AdvisoryRequest;
import com.agrigenius.dto.AdvisoryResponse;
import com.agrigenius.service.AdvisoryService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/advisory")
public class AdvisoryController {
    private final AdvisoryService advisoryService;

    public AdvisoryController(AdvisoryService advisoryService) {
        this.advisoryService = advisoryService;
    }

    @PostMapping
    public AdvisoryResponse suggest(@Valid @RequestBody AdvisoryRequest request) {
        return advisoryService.suggest(request);
    }
}
