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
                            <h4 style={{ color: '#f44c7a' }}>Girls Accessories</h4>
                            <p className='text-muted'>3000+ Products</p>
                            <button onClick={handleChange} className='btn-service'>Shop Now</button>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='man-card'>
                        <div>
                            <h4 style={{ color: '#03a98a' }}>Men Accessories</h4>
                            <p className='text-muted'>4000+ Products</p>
                            <button onClick={handleChange} className='btn-service'>Shop Now</button>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='kid-card'>
                        <div>
                            <h4 style={{ color: '#f77527' }}>Kids Accessories</h4>
                            <p className='text-muted'>302+ Kids Products</p>
                            <button onClick={handleChange} className='btn-service'>Shop Now</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Service;