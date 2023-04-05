import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import Company from "./components/Company/Company";
import First from "./components/First/First";
import Friends from "./components/Friends/Friends";
import FriendDetails from "./components/FriendDetails/FriendDetails";
import SinglePost from "./components/Posts/Posts";
import PostDetails from "./components/PostDetails/PostDetails"
import NotFound from "./components/NotFound/NotFound";
// const routs = createBrowserRouter([
//   {
//     path : '/',
//     element : <App/>
//   },
//   {
//     path : '/First',
//     element : <First></First>
//   },
//   {
//     path: '/about',
//     element : <About></About>
//   },
//   {
//     path: '/contact',
//     element : <Contact></Contact>
//   }
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    children: [
      {
        path: "fants",
        element: <Friends></Friends>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "friendDetails/:id",
        element: <FriendDetails></FriendDetails>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      },
      {
        path: "post",
        element: <SinglePost></SinglePost>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path:"postDetails/:id",
        element: <PostDetails></PostDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        // loader: ({params}) => console.log(params.id)
      },
      {
        path: "/",
        element: <First></First>,
      },
      {
        path: "details",
        element: <Details></Details>,
      },
      {
        path: "/company",
        // element: <Company></Company>,
        element: <Company></Company>,
      },
      {
        path:'*',
        element:<NotFound></NotFound>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
