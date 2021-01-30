package com.juaninamillion.PizzaPan.repositories;

import com.juaninamillion.PizzaPan.models.Drink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DrinkRepository extends JpaRepository<Drink, Long> {

}
