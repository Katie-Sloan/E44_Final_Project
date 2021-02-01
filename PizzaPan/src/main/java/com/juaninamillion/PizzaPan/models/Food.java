package com.juaninamillion.PizzaPan.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name ="foods")
public class Food {

    @Column(name ="title")
    private String title;

    @Column(name = "price")
    private float price;

    @Column(name = "prep_time")
    private int prepTime;

    @Column(name = "cooking_time")
    private int cookingTime;

    @ManyToMany
    @JsonIgnoreProperties({"foods"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "foods_orders",
            joinColumns = { @JoinColumn(name = "food_id") },
            inverseJoinColumns = { @JoinColumn(name = "order_id") }
    )
    private List<Order> orders;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;



    public Food(String title, float price, int prepTime, int cookingTime) {
        this.title = title;
        this.price = price;
        this.prepTime = prepTime;
        this.cookingTime = cookingTime;
        this.orders = new ArrayList<>();

    }

    public Food() {
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

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }
}
