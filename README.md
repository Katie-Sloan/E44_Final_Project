# Pizza Pan App

## Our aim

An app designed for restaurant customers to make orders from the browser. Inspired by Domino's Pizza, McDonald's and Just-Eat. The customer is able to browse the menu, submit an order and pay for their food. In the long run, the app will be designed for both sit-in and takeaway use, will be mobile compatible and will contain an animated order update page.

The app is based in React in the front end and Java/Spring in the back end.

## How our app works

[Jackson used to fetch data from API]. [A user can enter their details, which are persisted in the database.] The user then can navigate to the menu page and select items, click to checkout and edit their selection, and then finally pay for their order. Upon payment, a new order with that user attached to it is saved into the database.  

## Running instructions

The quickest way to get the app up and running is to navigate to the PizzaPan directory and enter:
- "brew install maven" 
- "mvn install"
- "java -jar target/PizzaPan-0.0.1-SNAPSHOT.jar"
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This runs the app without having to have the client side and server side open simultaneously. Alternatively, to run the app without using "brew install maven": 

### Back End

Open the PizzaPan directory and go to src/main/java/com.juaninamillion.PizzaPan/PizzaPanApplication. Run the main() method in order to start the back end application. 

### Front End

Once the back end is running, go to the pizza_pan_client directory and enter:

### `npm install`

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technologies used

- JavaScript
- React
- Java
- Spring
- Hibernate
- SQL
- NPM
- Jackson
- react-credit-cards



