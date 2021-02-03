package com.juaninamillion.PizzaPan.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "drinks")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Drink {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name= "name")
    private String title;

    @Column(name = "price")
    private float price;

    @ManyToMany
    @JsonIgnoreProperties({"drinks"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "drinks_orders",
            joinColumns = { @JoinColumn(name = "drink_id") },
            inverseJoinColumns = { @JoinColumn(name = "order_id") }
    )
    private List<Order> orders;


    public Drink(String title, float price) {
        this.title = title;
        this.price = price;
        this.orders = new ArrayList<>();

    }
    @Column(name ="image")
    private String image;

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
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

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }
}
