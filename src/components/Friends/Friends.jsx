import React from 'react';
import {
    Outlet,
    Link,
    useLoaderData,
  } from "react-router-dom";
import Friend from '../Friend/Friend';

const Friends = () => {

    const friends = useLoaderData();

    return (
        <div className=''>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-20'>
                {
                    friends.map((friend,idx) => <Friend key={idx} friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;