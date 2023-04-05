import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id,name,email,phone,address} = friend
    return (
        <div className='bg-teal-200 rounded-md text-black p-1 mt-4 flex flex-col'>
            <h3 className='bg-orange-700 text-white text-3xl font-semibold p-2 mb-3 text-center'>{name}</h3>
            <p className='text-1.5xl ml-3'>Email : {email}</p>
            <p className='text-1.5xl ml-3'>Phone : {phone}</p>
            <h6 className='ml-3'>Address : {address.city}</h6>
            <p className='my-3 text-center mt-auto'><Link className='text-blue-700' to={`/friendDetails/${id}`}>Show Details</Link></p>
        </div>
    );
};

export default Friend;