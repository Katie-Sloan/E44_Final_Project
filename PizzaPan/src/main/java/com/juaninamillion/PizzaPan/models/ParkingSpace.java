package com.juaninamillion.PizzaPan.models;

import javax.persistence.*;

@Entity
@Table(name = "parking_spaces")
public class ParkingSpace {

    @Column(name= "number_of_parking_space")
    private int numberOfParkingSpace;

    @Column(name= "booked")
    private boolean booked;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public ParkingSpace(int numberOfParkingSpace) {
        this.numberOfParkingSpace = numberOfParkingSpace;
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
}
