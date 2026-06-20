package com.agrigenius.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RootController {

    @GetMapping("/api")
    public String home() {
        return "AgriGenius Backend Running Successfully 🚀";
    }
}