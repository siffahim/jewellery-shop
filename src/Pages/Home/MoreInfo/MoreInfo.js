import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../images/img-7.jpg';
const MoreInfo = () => {
    return (
        <div className='mt-5' style={{ backgroundColor: '#fbf9f5' }}>
            <Container>
                <div className='text-center my-5'>
                    <h1 style={{ color: '#c29958' }} className='fs-3 fw-normal '>Latest Collections</h1>
                    <h2 style={{ letterSpacing: '5px' }} className='fw-bold fs-1 text-muted'>Spring Summer Clearance <br /> Women’s Sales</h2>
                </div>
                <Row xs={1} md={2} className='gy-5 d-flex align-items-center justify-content-center'>
                    <Col>
                        <img width='100%' src={img} alt="" />
                    </Col>
                    <Col>
                        <div className='text-center'>
                            <h2 className='fw-normal fs-1'>Deals of the day</h2>
                            <p className='fs-5'><small>Expired</small></p>
                            <h2 className='text-muted'>Evolution T-Shirt</h2>
                            <p>$250.00 <s>$298.00</s></p>
                            <button className='btn-regular'>Shop Now</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MoreInfo;