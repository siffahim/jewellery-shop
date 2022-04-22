import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import logo from '../../images/logo.png';
import Purchase from '../Purchase/Purchase';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const AddProduct = () => {
    const { purchaseId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        async function singleProduct() {
            const res = await fetch(`https://morning-savannah-07523.herokuapp.com/products/${purchaseId}`)
            const data = await res.json()
            setProduct(data)
        }
        singleProduct()
    }, [purchaseId])
    return (
        <div>
            <Navigation />
            <p className='text-center mb-4 mt-3'>
                <img width='200px' src={logo} alt="" />
            </p>
            <Purchase
                product={product}
            >
            </Purchase>
            <Footer />
        </div>
    );
};

export default AddProduct;