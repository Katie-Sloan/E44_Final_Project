package com.juaninamillion.PizzaPan.controllers;

import com.juaninamillion.PizzaPan.models.Drink;
import com.juaninamillion.PizzaPan.repositories.DrinkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DrinkController {
    @Autowired
    DrinkRepository drinkRepository;

    @GetMapping(value = "/drinks")
    public ResponseEntity<List<Drink>> getAllDrinks(){
        return new ResponseEntity<>(drinkRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/drinks/{id}")
    public ResponseEntity getDrink(@PathVariable Long id) {
        return new ResponseEntity<>(drinkRepository.findById(id), HttpStatus.OK);
    }

}
