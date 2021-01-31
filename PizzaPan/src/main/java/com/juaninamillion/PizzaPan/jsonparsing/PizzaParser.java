package com.juaninamillion.PizzaPan.jsonparsing;


import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.juaninamillion.PizzaPan.models.FoodTestingClass;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class PizzaParser {


    ObjectMapper mapper = new ObjectMapper();


//    public CollectionType constructCollectionType(Class<? extends Collection> collectionClass, Class<?> elementClass) {
    public List<FoodTestingClass> coolFunction() throws IOException, ClassNotFoundException {
        FoodTestingClass foodTestingClass;
        Class<?> foodInstance = Class.forName("com.juaninamillion.PizzaPan.models.FoodTestingClass");
        JavaType type = mapper.getTypeFactory().constructCollectionType(List.class, foodInstance);
        Object listOfFoodItems = mapper.readValue(new File("src/pizza.json"), type);
        ArrayList<FoodTestingClass> newList = (ArrayList<FoodTestingClass>) listOfFoodItems;
        System.out.println(newList.get(0).getImage());
        return newList;
    }

    public PizzaParser() throws IOException, ClassNotFoundException {
        List<FoodTestingClass> result = coolFunction();
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

