import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-start bg-teal-950 h-10 mx-1 rounded-lg">
      <div className="ml-20">
      <Link className=" text-2xl font-mono text-white m-8 hover:text-amber-500 duration-400 " to="/">Home </Link>
      <Link className=" text-2xl font-mono text-white m-8 hover:text-amber-500 duration-400 " to="/details">Details</Link>
      <Link className=" text-2xl font-mono text-white m-8 hover:text-amber-500 duration-400 " to="/company">Company</Link>
      <Link className=" text-2xl font-mono text-white m-8 hover:text-amber-500 duration-400 " to="/fants">Friends</Link>
      <Link className=" text-2xl font-mono text-white m-8 hover:text-amber-500 duration-400 " to="/post">Post</Link>
      </div>
    </div>
  );
};

export default Header;
