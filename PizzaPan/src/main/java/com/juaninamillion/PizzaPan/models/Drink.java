package com.juaninamillion.PizzaPan.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
@Table(name = "drinks")
public class Drink {

    @Column(name= "name")
    private String name;

    @Column(name = "price")
    private float price;

    @JsonIgnoreProperties({"drinks"})
    @ManyToOne
    @JoinColumn(name = "order_id", nullable = true)
    private Order order;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Drink(String name, float price) {
        this.name = name;
        this.price = price;
        this.order = null;

    }

    public Drink() {
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
