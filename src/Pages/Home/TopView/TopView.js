import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TopView.css';

const TopView = () => {
    return (
        <Container>
            <Row xs={1} md={2} className="my-5">
                <Col>
                    <div className='deal-card'>
                        <div>
                            <h2>DEAL OF THE DAY</h2>
                            <p>Women’s hats & accessories</p>
                            <button className='btn rounded py-2 bg-light text-dark'>DESCOVER NOW</button>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='fashion-card'>
                        <div>
                            <h2 className='fw-bold'>FASHION WEEK</h2>
                            <p>Women’s clothing</p>
                            <button style={{ backgroundColor: '#e04faa' }} className='btn rounded py-2 text-white'>DESCOVER NOW</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TopView;