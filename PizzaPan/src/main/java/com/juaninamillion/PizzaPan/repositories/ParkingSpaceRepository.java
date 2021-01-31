package com.juaninamillion.PizzaPan.repositories;

import com.juaninamillion.PizzaPan.models.ParkingSpace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParkingSpaceRepository extends JpaRepository<ParkingSpace, Long> {

}
