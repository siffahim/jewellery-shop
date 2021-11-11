import React from 'react';
import { Container } from 'react-bootstrap';
import bg from '../../../images/img-static-about-corano3.jpg';



const Blog = () => {
    return (
        <Container>
            <div className="row g-4 d-flex align-items-center my-5">
                <div className='col-12 col-md-5'>
                    <img src={bg} alt="" />
                </div>
                <div className='col-12 col-md-7'>
                    <h2 className='text-muted mb-4'>About Us</h2>

                    <h6>Founded in 1986, I.D. Jewelry, LLC, a family owned & operated business has become a house-hold name in states all over the USA as well as countries all over the world.</h6>

                    <blockquote>For those that rather the full immersion of the in store experience we welcome your company and look forward to meeting you face to face. Being located in the 47 street diamond district, known to be the largest diamond.</blockquote>

                    <p>Based in the heart of New York’s Diamond District, also known as the NYC diamond district, I. D. Jewelry has some of the most competitively priced in the market. It is our goal to supply our clients.</p>
                    <button className='btn-regular'>Learn More</button>
                </div>
            </div>
        </Container>
    );
};

export default Blog;