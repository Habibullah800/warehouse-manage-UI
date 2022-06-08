import React from 'react';
import Banner from '../components/Banner';
import Body from '../components/Body';
import Chart from '../components/Chart';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Body></Body>
            <Chart></Chart>
            <Footer></Footer>
        </div>
    );
};

export default Home;