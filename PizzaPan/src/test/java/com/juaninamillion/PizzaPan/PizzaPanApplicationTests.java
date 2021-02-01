package com.juaninamillion.PizzaPan;

import com.juaninamillion.PizzaPan.models.ParkingSpace;
import com.juaninamillion.PizzaPan.models.RestaurantTable;
import com.juaninamillion.PizzaPan.repositories.ParkingSpaceRepository;
import com.juaninamillion.PizzaPan.repositories.RestaurantTableRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class PizzaPanApplicationTests {

	@Autowired
	RestaurantTableRepository restaurantTableRepository;

	@Autowired
	ParkingSpaceRepository parkingSpaceRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canFindRestaurantTableByBookedFalse(){
		List<RestaurantTable> found = restaurantTableRepository.findByBookedFalse();
		assertEquals(1, found.size());
	}

	@Test
	public void canFindParkingSpaceByBookedFalse(){
		List<ParkingSpace> found = parkingSpaceRepository.findByBookedFalse();
		assertEquals(1, found.size());
	}

}
