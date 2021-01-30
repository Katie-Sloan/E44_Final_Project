package com.juaninamillion.PizzaPan.repositories;

import com.juaninamillion.PizzaPan.models.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends JpaRepository <Food, Long>{

}
