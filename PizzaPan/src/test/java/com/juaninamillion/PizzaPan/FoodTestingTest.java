package com.juaninamillion.PizzaPan;


import com.juaninamillion.PizzaPan.jsonparsing.PizzaParser;
import org.junit.jupiter.api.Test;

import java.io.IOException;


public class FoodTestingTest {
    @Test
    public void loadJSON() throws IOException, ClassNotFoundException {
        PizzaParser pizzaData = new PizzaParser();
//
        System.out.println(pizzaData);
        System.out.println(pizzaData.getResult());
//        System.out.println(pizzaData.getResult().get(0).getClass());

    }
}
