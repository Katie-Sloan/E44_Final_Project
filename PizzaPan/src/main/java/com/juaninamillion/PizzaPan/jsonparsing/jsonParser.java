package com.juaninamillion.PizzaPan.jsonparsing;


import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.juaninamillion.PizzaPan.models.Drink;
import com.juaninamillion.PizzaPan.models.Food;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Random;

public class jsonParser {

    public static List<Food> getFoodInstances(String className, String srcFile) throws ClassNotFoundException, IOException {
        ObjectMapper mapper = new ObjectMapper();
        JavaType type = getJavaType(mapper, Class.forName(className));
        List<Food> listOfJsonItems = mapper.readValue(new File(srcFile), type);
        generatePizzaPrepCookTimes(listOfJsonItems);
        generateRandomFoodPrice(listOfJsonItems, 15, 20);
        return listOfJsonItems;
    }

    public static List<Drink> getDrinkInstances(String className, String srcFile) throws ClassNotFoundException, IOException {
        ObjectMapper mapper = new ObjectMapper();
        JavaType type = getJavaType(mapper, Class.forName(className));
        List<Drink> listOfJsonItems = mapper.readValue(new File(srcFile), type);
        generateRandomDrinkPrice(listOfJsonItems, 2, 5);
        return listOfJsonItems;
    }

    private static void generateRandomFoodPrice(List<Food> foods, int min, int max) {
        for (Food item : foods) {
            item.setPrice((new Random().nextInt(min) + max - min/2) + 0.99f);
        }
    }

    private static void generateRandomDrinkPrice(List<Drink> drinks, int min, int max) {
        for (Drink item : drinks) {
            item.setPrice(new Random().nextInt(min) + max - min/2);
            item.setPrice(item.getPrice() + 0.99f);
        }
    }


    private static JavaType getJavaType(ObjectMapper mapper, Class<?> aClass) {
        return mapper.getTypeFactory().constructCollectionType(List.class, aClass);
    }

    private static void generatePizzaPrepCookTimes(List<Food> listOfFood) {
        // gives a random prep time of 10 - 25
        for (Food item : listOfFood) {
            item.setCookingTime(new Random().nextInt((10)) + 15);
        }

        // gives a random prep time of 2 - 6
        for (Food item : listOfFood) {
            item.setPrepTime(new Random().nextInt((2)) + 4);
        }
    }
    private static void generatePrice(int minPrice, int maxPrice) {
    }
}
