package com.juaninamillion.PizzaPan.models;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Column(name = "name")
    private String name;

    @Column(name = "size_of_party")
    private int sizeOfParty;

    @Column(name = "email_address")
    private String emailAddress;

    @Column(name = "password")
    private String password;

//    @Column(name = "order")
//    list of orders to be added here

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public User(String name, int sizeOfParty, String emailAddress, String password) {
        this.name = name;
        this.sizeOfParty = sizeOfParty;
        this.emailAddress = emailAddress;
        this.password = password;
    }

    public User(){

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSizeOfParty() {
        return sizeOfParty;
    }

    public void setSizeOfParty(int sizeOfParty) {
        this.sizeOfParty = sizeOfParty;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
