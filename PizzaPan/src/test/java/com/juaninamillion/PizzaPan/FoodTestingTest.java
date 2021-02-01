package com.juaninamillion.PizzaPan;


import com.juaninamillion.PizzaPan.jsonparsing.jsonParser;
import org.junit.jupiter.api.Test;

import java.io.IOException;


public class FoodTestingTest {
    @Test
    public void loadJSON() throws IOException, ClassNotFoundException {
        jsonParser pizzaData = new jsonParser();
//
        System.out.println(pizzaData);
//        System.out.println(pizzaData.getResult().get(0).getClass());

    }
}
