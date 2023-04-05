import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { NewspaperIcon } from '@heroicons/react/24/solid'

const PostDetails = () => {
    const data = useLoaderData()
    const{id,body,title} = data



    const navigate = useNavigate()
    const eventHandler = () =>{
        navigate(-1)
    }
    return (
        <div className='bg-pink-600 mx-80 p-10 rounded-md my-20'>
            <h2 className='border text-center rounded'>Post No : <span className='text-8xl font-bold text-center'>{id}</span></h2>
            <div className='flex items-center'>
            <NewspaperIcon className="h-6 w-6 text-white-300" />
            <p className='text-white  text-4xl text-justify font-semibold ml-3 my-3 text-wrap'>{title}</p>

            </div>
            <p className='text-black text-2xl text-justify'>{body}</p>
            <button onClick={eventHandler} className='font-semibold text-pink-600 bg-white p-2 rounded-md mt-7'>Go back</button>
        </div>
    );
};

export default PostDetails;