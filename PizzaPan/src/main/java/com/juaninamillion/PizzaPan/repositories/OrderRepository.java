package com.juaninamillion.PizzaPan.repositories;

import com.juaninamillion.PizzaPan.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
}
