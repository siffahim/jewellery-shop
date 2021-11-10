import React, { useRef } from 'react';
import swal from 'sweetalert';

const MakeAdmin = () => {
    const emailRef = useRef('')

    const handleMakeAdmin = e => {
        const email = emailRef.current.value
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email })
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    swal("Congratulation!", "Login successfully", "success");
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2 className='text-center fw-bold mb-4 text-muted'>Make Admin</h2>
            <div className='row'>
                <div className='col-md-6 col-12 mx-auto'>
                    <form onSubmit={handleMakeAdmin} className='d-flex '>
                        <input type="email" ref={emailRef} className='form-control' placeholder=" Email" />
                        <button className='btn-regular ms-1' type='submit'>ADMIN</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;