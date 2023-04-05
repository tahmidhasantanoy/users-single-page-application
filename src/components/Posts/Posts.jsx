import React from "react";
import { useLoaderData } from "react-router-dom";
import SinglePost from "../SinglePost/SinglePost";

const Post = () => {
  const postData = useLoaderData();
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-20">

      {postData.map((post,idx) => <SinglePost key={idx} post={post}></SinglePost>)}
    </div>
  );
};

export default Post;
