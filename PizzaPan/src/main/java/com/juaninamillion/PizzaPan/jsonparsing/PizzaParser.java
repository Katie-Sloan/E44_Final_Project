package com.juaninamillion.PizzaPan.jsonparsing;


import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.juaninamillion.PizzaPan.models.Food;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class PizzaParser {





//    public CollectionType constructCollectionType(Class<? extends Collection> collectionClass, Class<?> elementClass) {
    public static List<Food> getPizzaInstances() throws IOException, ClassNotFoundException {
        Food food;
        ObjectMapper mapper = new ObjectMapper();

        Class<?> foodInstance = Class.forName("com.juaninamillion.PizzaPan.models.Food");
        JavaType type = mapper.getTypeFactory().constructCollectionType(List.class, foodInstance);
        Object listOfFoodItems = mapper.readValue(new File("src/pizza.json"), type);
        ArrayList<Food> newList = (ArrayList<Food>) listOfFoodItems;
        System.out.println(newList.get(0).getImage());


        // gives a random cooking time of 10 - 25
        for(Food item:newList){
        item.setCookingTime(new Random().nextInt((10))+15);
        }
        for(Food item:newList) {
            System.out.println(item.getCookingTime());
        }

        // gives a random prep time of 10 - 25
        for(Food item:newList){
            item.setPrepTime(new Random().nextInt((2))+4);
        }
        for(Food item:newList) {
            System.out.println(item.getPrepTime());
        }
        return newList;
    }

    public PizzaParser() throws IOException, ClassNotFoundException {
        List<Food> result = getPizzaInstances();


    }
    //    public FoodTestingClass getFood() {
//        return food;
//    }
//
//    private void startReading() {
//        try {
//
//
//            System.setProperty("http.agent", "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.29 Safari/537.36");
//            food = mapper.readValue(new File("src/pizza.json"), FoodTestingClass.class);
//
//            System.out.println(food);
//
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//
//
//    }
//
//
//    public PizzaParser() throws ClassNotFoundException {
//
//        startReading();

    }

