package com.juaninamillion.PizzaPan.controllers;

import com.juaninamillion.PizzaPan.models.RestaurantTable;
import com.juaninamillion.PizzaPan.repositories.RestaurantTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RestaurantTableController {
    @Autowired
    RestaurantTableRepository restaurantTableRepository;

    @GetMapping(value = "/restaurant_tables")
    public ResponseEntity<List<RestaurantTable>> getAllRestaurantTablesAndFilters(
            @RequestParam(required = false, name = "booked") boolean booked
    ) {
        if (booked == false){
            return new ResponseEntity<>(restaurantTableRepository.findByBookedFalse(), HttpStatus.OK);
        }
//        if (booked){
            return new ResponseEntity<>(restaurantTableRepository.findByBookedTrue(), HttpStatus.OK);
//        }
//        return new ResponseEntity<>(restaurantTableRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/restaurant_tables/{id}")
    public ResponseEntity getRestaurantTable(@PathVariable Long id) {
        return new ResponseEntity<>(restaurantTableRepository.findById(id), HttpStatus.OK);
    }

}
