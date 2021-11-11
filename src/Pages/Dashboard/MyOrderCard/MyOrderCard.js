import React from 'react';
import './MyOrderCard.css';

const MyOrderCard = ({ order }) => {
    const { name, email, product, time, img, status } = order;
    const btnDelete = {
        border: 'none',
        backgroundColor: "#cd2027",
        color: "#fff",
        fontSize: "17px",
        borderRadius: "3px"
    }
    // const handleDelete = id => {
    //     fetch(`http://localhost:5000/orders/${id}`, {
    //         method: 'DELETE',

    //     })
    // }
    return (
        <div className='row g-0 custom-card' data-aos="fade-up">
            <div className='col-md-4 col-12'>
                <img src={img} alt="" />
            </div>
            <div className='col-md-7 col-12'>
                <div className='detail-info'>
                    <p className='fs-6 mt-1 fw-bold text-muted'>{product}</p>
                    <p className='me-4 text-muted text-size'><i class="fas fa-user text-custom text-size"></i> {name}</p>
                    <p className='text-muted text-size'><i class="fas fa-envelope text-custom text-size"></i> {email}</p>
                    <p className='text-size text-muted'><i className="fas fa-address-card text-custom"></i> {status ? 'Approved' : 'Panding...'}</p>
                    <p className='me-4 text-muted text-size'><i class="fas fa-history text-custom"></i>{time}</p>
                </div>
            </div>
            <div className='col-1'>
                <button style={btnDelete}><i className="fas fa-trash-alt"></i></button>
            </div>
        </div>
    );
};

export default MyOrderCard;