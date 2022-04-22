import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import ManageAlOrderCard from '../ManageAlOrderCard/ManageAlOrderCard';


const ManageAlOrders = () => {
    const [users, setusers] = useState([]);
    const [number, setNumber] = useState(0);
    useEffect(() => {
        fetch('https://morning-savannah-07523.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setusers(data))
    }, [number])
    return (
        <Container>
            <p className='text-center'>
                <img style={{ width: '180px' }} src={logo} alt="" />
            </p>
            <h6 className='text-center text-muted fw-bold'>Create Product</h6>
            <div className="table-responsive my-4 p-3 shadow rounded" data-aos="fade-up">
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='text-muted fw-normal'>Name</th>
                            <th className='text-muted fw-normal'>Email</th>
                            <th className='text-muted fw-normal'>Time</th>
                            <th className='text-muted fw-normal'>Status</th>
                            <th className='text-muted fw-normal'>Action</th>
                            <th className='text-muted fw-normal'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <ManageAlOrderCard
                                key={user._id}
                                user={user}
                                setNumber={setNumber}
                            ></ManageAlOrderCard>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </Container>
    );
};

export default ManageAlOrders;