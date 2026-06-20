package com.agrigenius.dto;

public record WeatherResponse(String city, double temperature, int humidity, String advice) {
}
