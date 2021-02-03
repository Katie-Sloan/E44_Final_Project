import React, {useState, useEffect} from 'react'
import Header from '../components/header/Header';
import ContentContainer from './ContentContainer';
// import OrderDetails from '../OrderDetails';
import Request from '../helpers/request'



const MainContainer = ({user, setUser, onCreate}) => {
    const [parkingSpots, setParkingSpots] = useState([]);
    const [tables, setTables] = useState([]);
    // const [loadMenu, setLoadMenu] = useState(false);

    // user

    // const handlePost = function(user){
    //     const request = new Request();
    //     request.post("api/users", user)
    //     .then(res => res.json())
    //     .then((currentUser) => {
    //         setUser(currentUser)
    //         // setLoadMenu(true)
    //         // window.location ='/menu'
    //     })
        
    // }



    // end of user
    
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
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <ContentContainer user={user} setUser={setUser} onCreate={onCreate}/>
            </main>
            <footer>
                <p>Footer stuff here</p>
            </footer>
        </>
    )
}

export default MainContainer;
