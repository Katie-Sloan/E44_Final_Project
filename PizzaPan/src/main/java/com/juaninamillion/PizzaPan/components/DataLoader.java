package com.juaninamillion.PizzaPan.components;

import com.juaninamillion.PizzaPan.jsonparsing.jsonParser;
import com.juaninamillion.PizzaPan.models.Drink;
import com.juaninamillion.PizzaPan.models.Food;
import com.juaninamillion.PizzaPan.repositories.DrinkRepository;
import com.juaninamillion.PizzaPan.repositories.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.List;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    DrinkRepository drinkRepository;

    @Autowired
    FoodRepository foodRepository;


    public void run(ApplicationArguments args) throws IOException, ClassNotFoundException {

        List<Food> foods = jsonParser.getFoodInstances("com.juaninamillion.PizzaPan.models.Food", "src/pizza.json" );
        for(Food food: foods){
            foodRepository.save(food);
        }

        List<Drink> drinks = (List<Drink>) jsonParser.getDrinkInstances("com.juaninamillion.PizzaPan.models.Drink", "src/juice.json");
        for(Drink drink: drinks){
            drinkRepository.save(drink);
        }
    }


}
