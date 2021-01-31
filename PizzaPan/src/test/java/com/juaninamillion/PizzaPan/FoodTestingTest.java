package com.juaninamillion.PizzaPan;


import com.juaninamillion.PizzaPan.jsonparsing.PizzaParser;
import com.juaninamillion.PizzaPan.models.Food;
import com.juaninamillion.PizzaPan.models.FoodTestingClass;
import org.junit.jupiter.api.Test;


public class FoodTestingTest {
    @Test
    public void loadJSON(){
        PizzaParser pizzaData = new PizzaParser();

        System.out.println(pizzaData);
        System.out.println(pizzaData.getFood().getRestaurantChain());


    }
}
