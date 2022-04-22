import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Service.css';
const Service = () => {
    const navigate = useHistory();
    const handleChange = () => {
        navigate.push(`/jewellery`)
    }
    return (
        <Container className='custom-service'>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <div className='woman-card'>
                        <div>
                            <h5 style={{ color: '#f44c7a' }}>Girls Accessories</h5>
                            <p className='text-muted'>3000+ Products</p>
                            <button onClick={handleChange} className='btn-service'>Shop Now <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='man-card'>
                        <div>
                            <h5 style={{ color: '#03a98a' }}>Men Accessories</h5>
                            <p className='text-muted'>4000+ Products</p>
                            <button onClick={handleChange} className='btn-service'>Shop Now <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='kid-card'>
                        <div>
                            <h5 style={{ color: '#f77527' }}>Kids Accessories</h5>
                            <p className='text-muted'>302+ Kids Products</p>
                            <button onClick={handleChange} className='btn-service'>Shop Now <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Service;