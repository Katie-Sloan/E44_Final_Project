package com.juaninamillion.PizzaPan.controllers;

import com.juaninamillion.PizzaPan.models.Order;
//import com.juaninamillion.PizzaPan.models.ParkingSpace;
import com.juaninamillion.PizzaPan.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
//import sun.security.provider.certpath.ResponderId;

import java.util.List;

@RestController
public class OrderController {

    @Autowired
    OrderRepository orderRepository;

    @GetMapping(value = "/orders")
    public ResponseEntity<List<Order>> getAllOrders(){
        return new ResponseEntity<>(orderRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/orders/{id}")
    public ResponseEntity getOrder(@PathVariable Long id){
        return new ResponseEntity<>(orderRepository.findById(id), HttpStatus.OK);
    }

    @PutMapping(value = "/orders/{id}")
    public ResponseEntity<Order> putOrder(@RequestBody Order order, @PathVariable Long id) {
        orderRepository.save(order);
        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }

    @PostMapping(value = "/orders")
    public ResponseEntity<Order> postOrder(@RequestBody Order order) {
        order.getUser()
        orderRepository.save(order);
        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }





}
