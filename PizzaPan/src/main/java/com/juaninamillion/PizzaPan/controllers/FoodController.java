package com.juaninamillion.PizzaPan.controllers;

import com.juaninamillion.PizzaPan.models.Food;
import com.juaninamillion.PizzaPan.repositories.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FoodController {
        @Autowired
        FoodRepository foodRepository;

        @GetMapping(value = "/foods")
        public ResponseEntity<List<Food>> getAllFoods(){
            return new ResponseEntity<>(foodRepository.findAll(), HttpStatus.OK);
        }

        @GetMapping(value = "/foods/{id}")
        public ResponseEntity getFood(@PathVariable Long id) {
            return new ResponseEntity<>(foodRepository.findById(id), HttpStatus.OK);
        }

}
