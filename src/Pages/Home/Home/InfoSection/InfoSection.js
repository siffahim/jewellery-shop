import React from 'react';
import { Container } from 'react-bootstrap';
import './InfoSection.css';

const InfoSection = () => {
    return (
        <div className='info-container'>
            <Container>
                <p className='fs-6'><small>WOMEN'S JEWELLERY</small></p>
                <h1 className='fw-normal fs-1'>Worth our weight in gold</h1>
                <p>The best way would be to use slogans related to gold as it is been seen as an ethnic ornament that has more heritage value in appearance as well as once it is worn. The next most important sound system for the jewelry shop is to first list out all the jewelry advertisement slogans which are been roaming in the mind.</p>
                <button className='btn-regular'>Collection</button>
            </Container>
        </div>
    );
};

export default InfoSection;