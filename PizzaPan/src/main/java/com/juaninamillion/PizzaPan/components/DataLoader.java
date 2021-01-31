package com.juaninamillion.PizzaPan.components;

import com.juaninamillion.PizzaPan.models.Drink;
import com.juaninamillion.PizzaPan.models.Food;
import com.juaninamillion.PizzaPan.models.RestaurantTable;
import com.juaninamillion.PizzaPan.repositories.DrinkRepository;
import com.juaninamillion.PizzaPan.repositories.FoodRepository;
import com.juaninamillion.PizzaPan.repositories.RestaurantTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    DrinkRepository drinkRepository;

    @Autowired
    FoodRepository foodRepository;

    @Autowired
    RestaurantTableRepository restaurantTableRepository;


    public void run(ApplicationArguments args){
        Food pizza = new Food("Mozarella Pizza", 2.5f, 5, 20);
        Food pizza1 = new Food("Pepperoni Pizza", 3.5f, 6, 25);
        foodRepository.save(pizza);
        foodRepository.save(pizza1);

        Drink cocktail = new Drink("Bloody Mary", 3.7f);
        Drink cocktail1 = new Drink("Cosmopolitan", 4);
        drinkRepository.save(cocktail);
        drinkRepository.save(cocktail1);

        RestaurantTable table = new RestaurantTable(1, 4);
        RestaurantTable table1 = new RestaurantTable(2, 2);
        restaurantTableRepository.save(table);
        restaurantTableRepository.save(table1);

    }


}
