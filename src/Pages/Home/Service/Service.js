import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import pic from '../../../images/image-section-42-min.png';

const Service = () => {
    return (
        <Container className='custom-service'>
            <Row xs={12} sm={2} md={3} className="g-4">
                <Col>
                    <div className='bg-custom px-2 text-white d-flex align-items-center p-0 rounded'>
                        <div>
                            <h6>Month End Banza</h6>
                            <p>Diamond Ring,Diamond Band & All Other Latest Items</p>
                        </div>
                        <img style={{ width: '130px', height: '110px' }} src={pic} alt='' />
                    </div>
                </Col>
                <Col>
                    <div className='bg-danger px-2 text-white d-flex align-items-center p-0 rounded'>
                        <div>
                            <h6>Month End Banza</h6>
                            <p>Diamond Ring,Diamond Band & All Other Latest Items</p>
                        </div>
                        <img style={{ width: '130px', height: '110px' }} src={pic} alt='' />
                    </div>
                </Col>
                <Col>
                    <div className='bg-custom px-2 text-white d-flex align-items-center p-0 rounded'>
                        <div>
                            <h6>Month End Banza</h6>
                            <p>Diamond Ring,Diamond Band & All Other Latest Items</p>
                        </div>
                        <img style={{ width: '130px', height: '110px' }} src={pic} alt='' />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Service;