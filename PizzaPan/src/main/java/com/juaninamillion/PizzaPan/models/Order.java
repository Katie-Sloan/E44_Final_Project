package com.juaninamillion.PizzaPan.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Entity
@Table(name = "orders")
public class Order {

    @Column(name = "order_number")
    private int orderNumber;

    @Column(name = "total_price")
    private float totalPrice;

    @ManyToMany
    @JsonIgnoreProperties(value = {"orders"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
        name = "foods_orders",
        joinColumns = { @JoinColumn(name = "order_id") },
        inverseJoinColumns = { @JoinColumn(name = "food_id") }
    )
    private List<Food> foods;

    @ManyToMany
    @JsonIgnoreProperties(value = {"orders"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "drinks_orders",
            joinColumns = { @JoinColumn(name = "order_id") },
            inverseJoinColumns = { @JoinColumn(name = "drink_id")}
    )
    private List<Drink> drinks;

    @JsonIgnoreProperties({"orders"})
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Order(int orderNumber, float totalPrice, User user) {
        this.orderNumber = orderNumber;
        this.totalPrice = totalPrice;
        this.user = user;
        this.foods = new ArrayList<>();
        this.drinks = new ArrayList<>();
    }

    public Order() {

    }

    public int getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(int orderNumber) {
        this.orderNumber = orderNumber;
    }

    public float getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(float totalPrice) {
        this.totalPrice = totalPrice;
    }

    public List<Food> getFoods() {
        return foods;
    }

    public void setFoods(List<Food> foods) {
        this.foods = foods;
    }

    public List<Drink> getDrinks() {
        return drinks;
    }

    public void setDrinks(List<Drink> drinks) {
        this.drinks = drinks;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void addFood(Food food){
        this.foods.add(food);
    }

    public void addDrink(Drink drink) {
        this.drinks.add(drink);
    }
}
