import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigate, useNavigation } from 'react-router-dom';

const Home = () => {
    const navi = useNavigation()
    return (
        <div>
            <Header></Header>
            {/* <h3 className='text-center my-7'> [main content]</h3>
   */}
            <div className='text-center my-4'> {navi.state === "loading" && "Loading .."}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;