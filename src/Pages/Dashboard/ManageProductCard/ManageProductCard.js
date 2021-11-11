import React from 'react';
import swal from 'sweetalert';

const ManageProductCard = ({ product, setNumber }) => {
    const { img, name, price, stock, _id } = product;
    const btnDelete = {
        border: 'none',
        backgroundColor: "#daa520",
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
                fetch(`http://localhost:5000/products/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            swal("🤭", "Deleted Successfully", "success");
                            setNumber(prev => prev + 1)
                        }
                    })
            }
        })
    }

    return (
        <tr>
            <td><img style={{ width: '50px' }} src={img} alt="" /></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{stock}</td>
            <td><button style={btnDelete} onClick={() => handleDelete(_id)}><i className="fas fa-trash-alt"></i></button></td>
        </tr>
    );
};

export default ManageProductCard;