package com.juaninamillion.PizzaPan.components;

import com.juaninamillion.PizzaPan.models.*;
import com.juaninamillion.PizzaPan.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    DrinkRepository drinkRepository;

    @Autowired
    FoodRepository foodRepository;

    @Autowired
    RestaurantTableRepository restaurantTableRepository;

    @Autowired
    ParkingSpaceRepository parkingSpaceRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    OrderRepository orderRepository;


    public void run(ApplicationArguments args){
        Food pizza = new Food("Mozarella Pizza", 2.5f, 5, 20);
        Food pizza1 = new Food("Pepperoni Pizza", 3.5f, 6, 25);
        foodRepository.save(pizza);
        foodRepository.save(pizza1);

        Drink cocktail = new Drink("Bloody Mary", 3.7f);
        Drink cocktail1 = new Drink("Cosmopolitan", 4);
        drinkRepository.save(cocktail);
        drinkRepository.save(cocktail1);

        User john = new User("John", 3, "john@anything.com", "batman");
        User juan = new User("Juan", 2, "juan@anything.com", "banana");
        userRepository.save(john);
        userRepository.save(juan);

        RestaurantTable table = new RestaurantTable(1, 4);
        RestaurantTable table1 = new RestaurantTable(2, 2);
        table.setUser(john);
        restaurantTableRepository.save(table);
        restaurantTableRepository.save(table1);

        ParkingSpace parkingSpace = new ParkingSpace(1);
        ParkingSpace parkingSpace1 = new ParkingSpace(2);
        parkingSpace.setUser(juan);
        parkingSpaceRepository.save(parkingSpace);
        parkingSpaceRepository.save(parkingSpace1);

        Order order3 = new Order(3, 4.50f, john);
        Order order4 = new Order(4, 5.75f, juan);
        pizza.setOrder(order3);
        pizza1.setOrder(order4);
//        order3.addFood(pizza);
        cocktail.setOrder(order3);
        cocktail1.setOrder(order4);
        orderRepository.save(order3);
        orderRepository.save(order4);
        foodRepository.save(pizza);
        foodRepository.save(pizza1);
        drinkRepository.save(cocktail);
        drinkRepository.save(cocktail1);
    }

}
