import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import MyOrderCard from '../MyOrderCard/MyOrderCard';
import './MyOrder.css';

const MyOrder = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [orders, user.email, setOrders])

    return (
        <Container>
            <div className="mybook-container">
                {
                    orders.map(order => <MyOrderCard
                        key={order.key}
                        order={order}
                    ></MyOrderCard>)
                }
            </div>
        </Container>
    );
};

export default MyOrder;