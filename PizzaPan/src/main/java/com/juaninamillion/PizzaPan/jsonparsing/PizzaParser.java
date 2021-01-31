package com.juaninamillion.PizzaPan.jsonparsing;


import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.juaninamillion.PizzaPan.models.Drink;
import com.juaninamillion.PizzaPan.models.Food;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class PizzaParser {


    public static List<?> getPizzaInstances(String className, String srcFile) throws IOException, ClassNotFoundException {
        Food food;
        ObjectMapper mapper = new ObjectMapper();

        Class<?> classInstance = Class.forName(className);
        JavaType type = mapper.getTypeFactory().constructCollectionType(List.class, classInstance);
        Object listOfJsonItems = mapper.readValue(new File(srcFile), type);
        if(className.equals("com.juaninamillion.PizzaPan.models.Food")) {
            ArrayList<Food> newList = (ArrayList<Food>) listOfJsonItems;
            generatePizzaPrepCookTimes(newList);
            return newList;
        }
        if(className.equals("com.juaninamillion.PizzaPan.models.Drink")) {
            // do stuff?
            ArrayList<Drink> newList = (ArrayList<Drink>) listOfJsonItems;
        }
        // gives a random cooking time of 10 - 25
        return null;
    }

    private static void generatePizzaPrepCookTimes(ArrayList<Food> listOfFood) {
        for (Food item : listOfFood) {
            item.setCookingTime(new Random().nextInt((10)) + 15);
        }
        for (Food item : listOfFood) {
            System.out.println(item.getCookingTime());
        }

        // gives a random prep time of 10 - 25
        for (Food item : listOfFood) {
            item.setPrepTime(new Random().nextInt((2)) + 4);
        }
        for (Food item : listOfFood) {
            System.out.println(item.getPrepTime());
        }
    }
}
    //    public CollectionType constructCollectionType(Class<? extends Collection> collectionClass, Class<?> elementClass) {
