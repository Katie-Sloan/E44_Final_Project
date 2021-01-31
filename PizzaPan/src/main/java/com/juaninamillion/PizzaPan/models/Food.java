package com.juaninamillion.PizzaPan.models;

import javax.persistence.*;
//@Entity
//@Table(name ="foods")
public class Food {

//    @Column(name ="name")
    private String title;

//    @Column(name = "price")
    private float price;

//    @Column(name = "prep_time")
    private int prepTime;

//    @Column(name = "cooking_time")
    private int cookingTime;

//    @Column(name ="image")
    private String image;

//    @Column(name="restaurantChain")
    private String restaurantChain;

//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Food(String title, float price, int prepTime, int cookingTime, String image) {
        this.title = title;
        this.price = price;
        this.prepTime = prepTime;
        this.cookingTime = cookingTime;
        this.image = image;
    }

    public Food() {
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int getPrepTime() {
        return prepTime;
    }

    public void setPrepTime(int prepTime) {
        this.prepTime = prepTime;
    }

    public int getCookingTime() {
        return cookingTime;
    }

    public void setCookingTime(int cookingTime) {
        this.cookingTime = cookingTime;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
