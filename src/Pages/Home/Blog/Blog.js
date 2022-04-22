import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';



const Blog = () => {
    return (
        <div style={{ background: '#c29958', color: '#fff' }} className='p-5'>
            <Container>
                <Row xs={1} md={2} className='d-flex align-items-center'>
                    <Col md={7}>
                        <h3>Do You Have Questions ?</h3>
                        <p>We'll help you to grow your career and growth.</p>
                    </Col>
                    <Col md={5}>
                        <InputGroup className="mb-3">
                            <FormControl aria-label="Amount (to the nearest dollar)" />
                            <InputGroup.Text style={{ background: '#fff', color: '#c29958' }}><i className="fa-solid fa-paper-plane"></i></InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;