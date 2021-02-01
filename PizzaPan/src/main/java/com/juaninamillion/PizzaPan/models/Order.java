package com.juaninamillion.PizzaPan.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.CollectionId;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {

    @Column(name = "order_number")
    private int orderNumber;

    @Column(name = "total_price")
    private float totalPrice;

    @JsonIgnoreProperties({"order"})
    @OneToMany(mappedBy = "order", fetch = FetchType.LAZY)
    private List<Food> foods;

    @JsonIgnoreProperties({"order"})
    @OneToMany(mappedBy = "order", fetch = FetchType.LAZY)
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
}
