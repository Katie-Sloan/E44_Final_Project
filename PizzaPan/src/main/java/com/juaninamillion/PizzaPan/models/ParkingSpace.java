package com.juaninamillion.PizzaPan.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
@Table(name = "parking_spaces")
public class ParkingSpace {

    @Column(name= "number_of_parking_space")
    private int numberOfParkingSpace;

    @Column(name= "booked")
    private boolean booked;

    @JsonManagedReference(value = "parking_space")
    @OneToOne(optional = true)
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = true)
    private User user;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    public ParkingSpace(int numberOfParkingSpace) {

        this.numberOfParkingSpace = numberOfParkingSpace;
        this.user = null;
    }

    public ParkingSpace() {

    }

    public int getNumberOfParkingSpace() {
        return numberOfParkingSpace;
    }

    public void setNumberOfParkingSpace(int numberOfParkingSpace) {
        this.numberOfParkingSpace = numberOfParkingSpace;
    }

    public boolean isBooked() {
        return booked;
    }

    public void setBooked(boolean booked) {
        this.booked = booked;
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
        setBooked(true);
    }
}
