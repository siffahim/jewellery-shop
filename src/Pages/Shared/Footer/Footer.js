
import React from 'react';
import logo from '../../../images/footer.png';
import pay from '../../../images/payment.png';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className='footer-container p-4'>
                <ul>
                    <p className='fs-6 fw-bold'>CONTACT INFO</p>
                    <li><i class="fas fa-map-marker-alt"></i> Mirpur-12,Doctor Goli,Road-N2.Dhaka,Bangladesh</li>
                    <li><i class="fas fa-phone-alt"></i> 00965321402</li>
                    <li><i class="fas fa-envelope"></i>worldtourism2021@gmail.com</li>
                    <ul className='footer-icon'>
                        <li className='me-2 icon'><i className="fab fa-facebook-square"></i></li>
                        <li className='me-2 icon'><i className="fab fa-twitter-square"></i></li>
                        <li className='me-2 icon'><i className="fab fa-linkedin"></i></li>
                        <li className='me-2 icon'><i className="fab fa-instagram-square"></i></li>
                    </ul>
                </ul>
                <ul>
                    <p className='fs-6 fw-bold'>INFORMATION</p>
                    <li><i class="fal fa-window-minimize"></i> About Us</li>
                    <li><i class="fal fa-window-minimize"></i> Delivery</li>
                    <li><i class="fal fa-window-minimize"></i> Prices Drop</li>
                    <li><i class="fal fa-window-minimize"></i> New Products</li>
                    <li><i class="fal fa-window-minimize"></i> Best Seles</li>
                </ul>
                <ul>
                    <p className='fs-6 fw-bold'>MY ACCOUNT</p>
                    <li><i class="fal fa-window-minimize"></i> Personal Info</li>
                    <li><i class="fal fa-window-minimize"></i> Orders</li>
                    <li><i class="fal fa-window-minimize"></i> Our Services</li>
                    <li><i class="fal fa-window-minimize"></i> Credit Slips</li>
                    <li><i class="fal fa-window-minimize"></i> Addresses</li>
                    <li><i class="fal fa-window-minimize"></i> My Wishlist</li>
                </ul>
                <ul>
                    <p className='fs-6 fw-bold'>INSTAGRAM POST</p>
                    <img width='300px' className='img-fluid' src={logo} alt="" />
                </ul>
            </div>
            <div className='footer-copyright'>
                <p>Pay with</p>
                <img className='img-fluid' src={pay} alt="" />
            </div>
        </div>
    );
};

export default Footer;