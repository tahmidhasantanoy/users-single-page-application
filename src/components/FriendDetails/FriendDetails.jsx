import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  UserIcon,
  MapPinIcon,
  QrCodeIcon,
} from "@heroicons/react/24/solid";

const FriendDetails = () => {
  const friendData = useLoaderData();

  const { username, website,name } = friendData;
  const { street, suite, city, zipcode } = friendData.address;
  return (
    <div className="flex items-center justify-center my-40">
        <div className="bg-green-700 p-3 rounded-lg border border-green-900">
        <p className="text-5xl text-center mb-5">{name}</p>
      <div className="border-4 border-y-cyan-100 p-3 ">
        <div className="flex items-center">
        <UserIcon className="h-6 w-6 text-red-600 mr-3" />
          <h4 className="text-3xl">
            {" "}
            
            User name : {username}
          </h4>
        </div>
        <div className="flex items-center">
        <MapPinIcon className="h-6 w-6 text-red-600 mr-3"/>
          <p className="text-2xl">
           
            Full address : {street},{suite},{city}{" "}
          </p>
        </div>
        <div className="flex items-center">
        <QrCodeIcon className="h-6 w-6 text-red-600 mr-3" />
          <p className="text-2xl">
            
            Zip code : {zipcode}
          </p>
        </div>
      </div>
      <p className="mt-4 text-center">Website : {website}</p>
    </div>
    </div>
  );
};

export default FriendDetails;
