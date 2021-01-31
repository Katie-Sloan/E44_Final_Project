package com.juaninamillion.PizzaPan.jsonparsing;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.juaninamillion.PizzaPan.models.FoodTestingClass;

import java.io.File;
import java.io.IOException;
import java.net.URL;

public class PizzaParser {

    ObjectMapper mapper = new ObjectMapper();

    FoodTestingClass food;

    public FoodTestingClass getFood() {
        return food;
    }

    private void startReading() {
        try {
            System.setProperty("http.agent", "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.29 Safari/537.36");
            food = mapper.readValue(new URL("https://api.spoonacular.com/food/menuItems/search?query=dominos%20pan%20pizza&apiKey=ff9b039211674a68a4864219f020d1ea&number=1"), FoodTestingClass.class);

            System.out.println(food);

        } catch (IOException e) {
            e.printStackTrace();
        }


    }


    public PizzaParser() {

        startReading();

    }
}
