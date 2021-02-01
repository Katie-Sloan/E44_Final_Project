package com.juaninamillion.PizzaPan.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
@Table(name = "tables")
public class RestaurantTable {

    @Column(name= "number_of_table")
    private int numberOfTable;

    @Column(name= "table_size")
    private int tableSize;

    @Column(name= "booked")
    private boolean booked;

    @JsonManagedReference(value = "restaurant_table")
    @OneToOne(optional = true)
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = true)
    private User user;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public RestaurantTable(int numberOfTable, int tableSize) {
        this.numberOfTable = numberOfTable;
        this.tableSize = tableSize;
        this.booked = false;
        this.user = null;
    }

    public RestaurantTable() {

    }

    public int getNumberOfTable() {
        return numberOfTable;
    }

    public void setNumberOfTable(int numberOfTable) {
        this.numberOfTable = numberOfTable;
    }

    public int getTableSize() {
        return tableSize;
    }

    public void setTableSize(int tableSize) {
        this.tableSize = tableSize;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isBooked() {
        return booked;
    }

    public void setBooked(boolean booked) {
        this.booked = booked;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
        setBooked(true);
    }

}
