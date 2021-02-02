import React, {useState, useEffect} from 'react'
import Header from '../components/header/Header';
import ContentContainer from './ContentContainer';
import OrderDetails from '../OrderDetails';
import Request from '../helpers/request'
import '../style/mainContainer.css'
import Sidebar from '../components/Sidebar'



const MainContainer = () => {
    const [parkingSpots, setParkingSpots] = useState([]);
    const [tables, setTables] = useState([]);
    
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
                <div className="main-content">
                    <ContentContainer className="main"/>
                    <Sidebar className="sidebar"/>
                </div>
            </main>
            <footer>
                <p>Footer stuff here</p>
            </footer>
        </>
    )
}

export default MainContainer;
