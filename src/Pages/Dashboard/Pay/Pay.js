import React from 'react';
import logo from '../../../images/logo.png';
import pay from '../../../images/payment2.png';

const Pay = () => {
    return (
        <div>
            <p className='text-center'>
                <img style={{ width: '180px' }} src={logo} alt="" />
            </p>
            <h6 className='text-center fw-bold text-muted'>Payment With</h6>
            <p className='text-center'><img width='70%' className='img-fluid' src={pay} alt="" /></p>
        </div>
    );
};

export default Pay;