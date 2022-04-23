import React from 'react';
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
    return (
        <div>
            <Navigation />
            <Banner />
            <Service />
            <Products>
                Woman
            </Products>
            <InfoSection />
            <Products>
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