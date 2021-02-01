package com.juaninamillion.PizzaPan.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
@Table(name ="foods")
public class Food {

    @Column(name ="name")
    private String name;

    @Column(name = "price")
    private float price;

    @Column(name = "prep_time")
    private int prepTime;

    @Column(name = "cooking_time")
    private int cookingTime;

    @JsonIgnoreProperties({"foods"})
    @ManyToOne
    @JoinColumn(name = "order_id", nullable = true)
    private Order order;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;



    public Food(String name, float price, int prepTime, int cookingTime) {
        this.name = name;
        this.price = price;
        this.prepTime = prepTime;
        this.cookingTime = cookingTime;
        this.order = null;

    }

    public Food() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
}
