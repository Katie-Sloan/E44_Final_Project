package com.juaninamillion.PizzaPan.components;

import com.juaninamillion.PizzaPan.models.*;
import com.juaninamillion.PizzaPan.repositories.*;

import com.juaninamillion.PizzaPan.jsonparsing.jsonParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.List;

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


    public void run(ApplicationArguments args) throws IOException, ClassNotFoundException {

        List<Food> foods = jsonParser.getFoodInstances("com.juaninamillion.PizzaPan.models.Food", "src/pizza.json" );
        for(Food food: foods){
            foodRepository.save(food);
        }

        List<Drink> drinks = (List<Drink>) jsonParser.getDrinkInstances("com.juaninamillion.PizzaPan.models.Drink", "src/juice.json");
        for(Drink drink: drinks){
            drinkRepository.save(drink);
        }

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
        order3.addFood(foods[0]);
        order3.addDrink(drinks[0]);
        order4.addFood(foods[1]);
        order4.addDrink(drinks[1]);
        orderRepository.save(order3);
        orderRepository.save(order4);
    }

}
