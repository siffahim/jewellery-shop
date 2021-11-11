import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import ManageProductCard from '../ManageProductCard/ManageProductCard';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const [number, setNumber] = useState(0);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [number])
    return (
        <Container>
            <p className='text-center'>
                <img style={{ width: '180px' }} src={logo} alt="" />
            </p>
            <h6 className='text-center text-muted fw-bold'>Manage Product</h6>
            <div className="table-responsive my-4 p-3 shadow rounded" data-aos="fade-up">
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='text-muted fw-normal'>Pictures</th>
                            <th className='text-muted fw-normal'>Names</th>
                            <th className='text-muted fw-normal'>Prices</th>
                            <th className='text-muted fw-normal'>Stocks</th>
                            <th className='text-muted fw-normal'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <ManageProductCard
                                key={product._id}
                                product={product}
                                setNumber={setNumber}
                            ></ManageProductCard>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </Container>
    );
};

export default ManageProduct;