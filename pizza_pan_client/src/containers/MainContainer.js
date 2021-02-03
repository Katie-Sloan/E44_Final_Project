import React, {useState, useEffect} from 'react'
import Header from '../components/header/Header';
import ContentContainer from './ContentContainer';
import OrderDetails from '../OrderDetails';
import Request from '../helpers/request'



const MainContainer = () => {
    const [parkingSpots, setParkingSpots] = useState([]);
    const [tables, setTables] = useState([]);
    const [orderItems, setOrderItems] = useState([]);
    const [propKey, setPropKey] = useState(1);
    const [test, setTest] = useState(true);
    
    const apiRequests = () => {
        const request = new Request();
        const tablesPromise = request.get('api/restaurant_tables')
        const parkingPromise = request.get('api/parking_spaces')
        Promise.all([parkingPromise, tablesPromise])
            .then(data => {
                setTables(data[0]);
                setParkingSpots(data[1]);
            });
    }

    useEffect(() => {
        apiRequests()
    }, []);

    useEffect(()=> {
        setOrderItems(orderItems);
    })

    const changeTest = function(){
        setTest(!test);
    }

    const addToFoodCount = function(food){
        console.log("got this far");
        let newOrderItems = orderItems;
        newOrderItems.push(food);
        setOrderItems(newOrderItems); 
        let newPropKey = propKey;
        newPropKey += 1;
        setPropKey(newPropKey);
        console.log(orderItems)
      }
    
      const subtractFromFoodCount = function(food){
        console.log("got this far")
        for (const order of orderItems) {
          if(food == order) {
            const index = orderItems.indexOf(order)
            orderItems.splice(index, 1);
            let newPropKey = propKey;
            newPropKey += 1;
            changeTest();
            console.log(orderItems);
            return;
          }
        }
      }
        
      const addToDrinkCount = function(drink){
        console.log("got this far");
        let newOrderItems = orderItems;
        newOrderItems.push(drink);
        setOrderItems(newOrderItems); 
        let newPropKey = propKey;
        newPropKey += 1;
        setPropKey(newPropKey);
        console.log(orderItems)
      }
    
      const subtractFromDrinkCount = function(drink){
        console.log("got this far")
        for (const order of orderItems) {
          if(drink == order) {
            const index = orderItems.indexOf(order)
            orderItems.splice(index, 1);
            let newPropKey = propKey;
            newPropKey += 1;
            changeTest();
            console.log(orderItems);
            return;
          }
        }
      }  

    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <ContentContainer 
                 orderItems = {orderItems}
                 key = {propKey}
                 setOrderItems = {setOrderItems}
                 test = {test}
                 setTest = {setTest}
                 addToFoodCount={addToFoodCount}
                 subtractFromFoodCount={subtractFromFoodCount}
                 addToDrinkCount={addToDrinkCount}
                 subtractFromDrinkCount={subtractFromDrinkCount}
                 />  
            </main>
            <footer>
                <p>Footer stuff here</p>
            </footer>
        </>
    )
}

export default MainContainer;
