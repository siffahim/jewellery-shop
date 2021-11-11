import React from 'react';
import swal from 'sweetalert';
import './MyOrderCard.css';

const MyOrderCard = ({ order }) => {
    const { name, email, product, time, img, status, _id } = order;
    const btnDelete = {
        border: 'none',
        backgroundColor: "#cd2027",
        color: "#fff",
        fontSize: "17px",
        borderRadius: "3px"
    }
    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(isOkey => {
            if (isOkey) {
                fetch(`https://limitless-scrubland-09812.herokuapp.com/orders/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            swal("🤭", "Deleted Successfully", "success");
                        }
                    })
            }
        })

    }
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
                    <p className='text-size text-muted'><i className="fas fa-address-card text-custom"></i> {status ? 'Shipped' : 'Panding...'}</p>
                    <p className='me-4 text-muted text-size'><i class="fas fa-history text-custom"></i>{time}</p>
                </div>
            </div>
            <div className='col-1'>
                <button style={btnDelete} onClick={() => handleDelete(_id)}><i className="fas fa-trash-alt"></i></button>
            </div>
        </div>
    );
};

export default MyOrderCard;