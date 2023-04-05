import React from "react";
import { Link, Navigate as navigate, useNavigate } from "react-router-dom";

const SinglePost = ({ post }) => {
  const { title, body, id } = post;

  const navigate = useNavigate();

  const eventhandler = () => {
    navigate(`/postDetails/${id}`);
  };
  return (
    <div className="bg-teal-950 rounded-lg p-5 border relative">
      <h4 className="text-2xl text-amber-500 font-semibold mb-4 text-center ">
        {title}
      </h4>
      <hr />
      <p className="mb-3 pb-5">{body}</p>
      <button
        onClick={() => eventhandler(id)}
        className="bg-amber-600 hover:text-white duration-700 focus: text-teal-950 font-bold p-2 my-3 rounded-lg absolute bottom-0"
      >
        show more
      </button>
      {/* <Link className='bg-amber-600 hover:text-white duration-700 focus: text-teal-950 font-bold p-2 my-3 rounded-lg absolute bottom-0' to={`/postDetails/${id}`}>Show more</Link> */}
    </div>
  );
};

export default SinglePost;
