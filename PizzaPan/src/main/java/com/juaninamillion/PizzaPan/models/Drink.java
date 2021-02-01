package com.juaninamillion.PizzaPan.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "drinks")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Drink {

    @Column(name= "name")
    private String title;

    @Column(name = "price")
    private float price;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Drink(String title, float price) {
        this.title = title;
        this.price = price;

    }

    public Drink() {
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
