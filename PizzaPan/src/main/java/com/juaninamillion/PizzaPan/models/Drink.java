package com.juaninamillion.PizzaPan.models;

import javax.persistence.*;

@Entity
@Table(name = "drinks")
public class Drink {

    @Column(name= "name")
    private String name;

    @Column(name = "price")
    private float price;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Drink(String name, float price) {
        this.name = name;
        this.price = price;

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
}
