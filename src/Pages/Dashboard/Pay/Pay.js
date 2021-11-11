import React from 'react';
import pay from '../../../images/payment2.png';

const Pay = () => {
    return (
        <div>
            <h3 className='text-center fw-bold text-muted'>Payment With</h3>
            <p className='text-center'><img width='70%' className='img-fluid' src={pay} alt="" /></p>
        </div>
    );
};

export default Pay;