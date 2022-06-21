import React from 'react';
import Banner from '../components/Banner';
import Chart from '../components/Chart';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Products from '../components/inventory/Products';
import PhotoGalary from '../components/PhotoGalary';
import Reviews from '../components/Reviews';
import Stat from '../components/Stat';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <PhotoGalary></PhotoGalary>

            <Hero></Hero>
            <Chart></Chart>
            <Reviews></Reviews>
            <Stat></Stat>
            <Footer></Footer>
        </div>
    );
};

export default Home;