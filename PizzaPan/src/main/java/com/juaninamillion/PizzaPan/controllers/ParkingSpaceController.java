package com.juaninamillion.PizzaPan.controllers;

import com.juaninamillion.PizzaPan.models.ParkingSpace;
import com.juaninamillion.PizzaPan.repositories.ParkingSpaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ParkingSpaceController {
    @Autowired
    ParkingSpaceRepository parkingSpaceRepository;

    @GetMapping(value = "/parking_spaces")
    public ResponseEntity<List<ParkingSpace>> getAllParkingSpacesAndFilters(
            @RequestParam(required = false, name = "booked") boolean booked
    ) {
        if (booked == false){
            return new ResponseEntity<>(parkingSpaceRepository.findByBookedFalse(), HttpStatus.OK);
        }
        return new ResponseEntity<>(parkingSpaceRepository.findByBookedTrue(), HttpStatus.OK);
    }

    @GetMapping(value = "/parking_spaces/{id}")
    public ResponseEntity getParkingSpace(@PathVariable Long id) {
        return new ResponseEntity<>(parkingSpaceRepository.findById(id), HttpStatus.OK);
    }

    @PutMapping(value = "/parking_spaces/{id}")
    public ResponseEntity<ParkingSpace> putParkingSpace(@RequestBody ParkingSpace parkingSpace, @PathVariable Long id) {
        parkingSpaceRepository.save(parkingSpace);
        return new ResponseEntity<>(parkingSpace, HttpStatus.CREATED);
    }

}
