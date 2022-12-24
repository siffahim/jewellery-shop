import React, { useEffect, useState } from 'react';
import Products from '../../Products/Products';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import MoreInfo from '../MoreInfo/MoreInfo';
import Service from '../Service/Service';
import TopView from '../TopView/TopView';
import InfoSection from './InfoSection/InfoSection';

const Home = () => {
    const [females, setFemales] = useState([])
    const [males, setMales] = useState([])

    //datasize
    const size = 8;

    //female data call
    useEffect(() => {
        fetch(`https://jewellery-server-csgb.onrender.com/products?size=${size}`)
            .then(res => res.json())
            .then(data => setFemales(data))
    }, [])

    //male data call
    const skipData = 9;
    useEffect(() => {
        fetch(`https://jewellery-server-csgb.onrender.com/maleProducts?size=${size}&&skipData=${skipData}`)
            .then(res => res.json())
            .then(data => setMales(data))
    }, [])

    return (
        <div>
            <Navigation />
            <Banner />
            <Service />
            <Products products={females}>
                Woman
            </Products>
            <InfoSection />
            <Products products={males}>
                Man
            </Products>
            <TopView />
            <MoreInfo />
            {/* <ReviewSection /> */}
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;