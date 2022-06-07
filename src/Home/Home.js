import React from 'react';
import Banner from '../components/Banner';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Body></Body>
            <Footer></Footer>
        </div>
    );
};

export default Home;