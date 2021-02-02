package com.juaninamillion.PizzaPan.repositories;

import com.juaninamillion.PizzaPan.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
