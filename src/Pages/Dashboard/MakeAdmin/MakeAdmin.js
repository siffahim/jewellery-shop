import React, { useRef } from 'react';
import swal from 'sweetalert';
import logo from '../../../images/logo.png';

const MakeAdmin = () => {
    const emailRef = useRef('')

    const handleMakeAdmin = e => {
        const email = emailRef.current.value
        fetch('https://jewellery-server-csgb.onrender.com/users/admin', {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email })
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    swal("WOW!", "Made Admin successfully", "success");
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <p className='text-center'>
                <img style={{ width: '180px' }} src={logo} alt="" />
            </p>
            <h5 className='text-center fw-bold mb-4 text-muted'>Make Admin</h5>
            <div className='row'>
                <div className='col-md-6 col-12 mx-auto'>
                    <form onSubmit={handleMakeAdmin} className='d-flex '>
                        <input type="email" ref={emailRef} className='form-control' placeholder=" Email" />
                        <button className='btn-form ms-1' type='submit'>ADMIN</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;