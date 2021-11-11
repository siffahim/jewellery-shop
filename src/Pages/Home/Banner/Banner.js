import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <Container>
                <p className='fs-6'><small>WOMEN'S JEWELLERY</small></p>
                <h1 className='fw-normal fs-1'>FAMILY <span>JEWELLERY</span><br /> COLLECTION</h1>
                <p>Follow your true passion, let your jewelry guide you.</p>
                <button className='btn-regular'>Shop Now</button>
            </Container>
        </div>
    )
};

export default Banner;