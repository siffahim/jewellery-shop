import React from 'react';
import Products from '../../Products/Products';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import ReviewSection from '../ReviewSection/ReviewSection';


const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Products />
            <ReviewSection />
            <Footer />
        </div>
    );
};

export default Home;