package com.juaninamillion.PizzaPan.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class FoodTestingClass {

    public int id;
    private String restaurantChain;
    private String servingSize;
    private String readableServingSize;
    private String image;
    private String imageType;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRestaurantChain() {
        return restaurantChain;
    }

    public void setRestaurantChain(String restaurantChain) {
        this.restaurantChain = restaurantChain;
    }

    public String getServingSize() {
        return servingSize;
    }

    public void setServingSize(String servingSize) {
        this.servingSize = servingSize;
    }

    public String getReadableServingSize() {
        return readableServingSize;
    }

    public void setReadableServingSize(String readableServingSize) {
        this.readableServingSize = readableServingSize;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getImageType() {
        return imageType;
    }

    public void setImageType(String imageType) {
        this.imageType = imageType;
    }
}

//
//package com.juaninamillion.PizzaPan.models;
//
//
//        import com.fasterxml.jackson.annotation.JsonInclude;
//        import com.fasterxml.jackson.annotation.JsonProperty;
//        import com.fasterxml.jackson.annotation.JsonPropertyOrder;
//
//@JsonInclude(JsonInclude.Include.NON_NULL)
//@JsonPropertyOrder({ "id", "restaurantChain", "servingSize", "readableServingSize", "image", "imageType"  })
//public class FoodTestingClass {
//
//    @JsonProperty("id")
//    public int id;
//
//    @JsonProperty("restaurantChain")
//    public String restaurantChain;
//
//    @JsonProperty("servingSize")
//    public String servingSize;
//
//    @JsonProperty("readableServingSize")
//    public String readableServingSize;
//
//    @JsonProperty("image")
//    public String image;
//
//    @JsonProperty("imageType")
//    public String imageType;
//
//
//}