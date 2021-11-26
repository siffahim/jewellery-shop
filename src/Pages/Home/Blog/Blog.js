import React from 'react';
import { Container } from 'react-bootstrap';



const Blog = () => {
    return (
        <Container>
            <div className="row g-4 d-flex align-items-center my-5">
                <div className='col-12 col-md-5'>
                    <img className='img-fluid' src='https://wpbingosite.com/wordpress/mojuri/wp-content/uploads/2021/07/banner-7.jpg.webp' alt="" />
                </div>
                <div className='col-12 col-md-7'>
                    <h3 className='text-muted mb-4'>ABOUT US</h3>

                    <h6>Founded in 1986, I.D. Jewelry, LLC, a family owned & operated business has become a house-hold name in states all over the USA as well as countries all over the world.</h6>

                    <blockquote>For those that rather the full immersion of the in store experience we welcome your company and look forward to meeting you face to face. Being located in the 47 street diamond district, known to be the largest diamond.For those that rather the full immersion of the in store experience we welcome your company and look forward to meeting you face to face. Being located in the 47 street diamond district, known to be the largest diamond.Being located in the 47 street diamond district, known to be the largest diamond.Being located in the 47 street diamond district, known to be the largest diamond.</blockquote>

                    <p>Based in the heart of New York’s Diamond District, also known as the NYC diamond district, I. D. Jewelry has some of the most competitively priced in the market. It is our goal to supply our clients.Based in the heart of New York’s Diamond District, also known as the NYC diamond district, I. D.</p>
                    <button className='btn-regular'>Learn More</button>
                </div>
            </div>
        </Container>
    );
};

export default Blog;