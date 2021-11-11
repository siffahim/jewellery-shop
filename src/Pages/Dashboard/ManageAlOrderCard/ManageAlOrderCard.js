import React from 'react';
import swal from 'sweetalert';

const ManageAlOrderCard = ({ user, setNumber }) => {
    const { name, email, time, status, _id } = user;
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
                fetch(`https://limitless-scrubland-09812.herokuapp.com/orders/${id}`, {
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
    const handleChange = e => {
        const task = e.target.checked;
        fetch('https://limitless-scrubland-09812.herokuapp.com/orders', {
            method: 'PUT',
            headers: {
                "content-type": 'application/json',
            },
            body: JSON.stringify({ _id, task })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setNumber(prev => prev + 1)
                    swal("🙂!", "Shipped successfully", "success");
                }
            })
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{time}</td>
            <td>{status ? 'Shipped ' : 'Pandding...'}</td>
            <td><input className="form-check-input" type="checkbox" onChange={handleChange} /></td>
            <td><button style={btnDelete} onClick={() => handleDelete(_id)}><i className="fas fa-trash-alt"></i></button></td>
        </tr>
    );
};

export default ManageAlOrderCard;