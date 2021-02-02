package com.juaninamillion.PizzaPan.repositories;

import com.juaninamillion.PizzaPan.models.RestaurantTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestaurantTableRepository extends JpaRepository<RestaurantTable, Long> {

    List<RestaurantTable> findByBookedFalse();

//    Add this query once user class set up
//    List<RestaurantTable> findByBookedFalseAndTableSizeGreaterThanUserPartySize();

    List<RestaurantTable> findByBookedTrue();
}
