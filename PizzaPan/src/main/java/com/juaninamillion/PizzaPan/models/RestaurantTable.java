package com.juaninamillion.PizzaPan.models;

import javax.persistence.*;

@Entity
@Table(name = "tables")
public class RestaurantTable {

    @Column(name="number_of_table")
    private int numberOfTable;

    @Column(name= "table_size")
    private int tableSize;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public RestaurantTable(int numberOfTable, int tableSize) {
        this.numberOfTable = numberOfTable;
        this.tableSize = tableSize;
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
}
