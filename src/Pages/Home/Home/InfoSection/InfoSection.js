import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img2 from '../../../../images/halter.png';
import img1 from '../../../../images/shoes.png';
import img3 from '../../../../images/watches.png';
import './InfoSection.css';

const InfoSection = () => {
    return (
        <Container>
            <Row className='mt-5 gy-2'>
                <Col xs={12} md={6}>
                    <img width='100%' src={img1} alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <img width='100%' src={img2} alt="" />
                    <img className='mt-4' width='100%' src={img3} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default InfoSection;