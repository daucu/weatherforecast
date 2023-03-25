import React from "react";
import { MdOutlineLocationOff } from "react-icons/md";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="bg-[#2C6FB3]  p-4 flex flex-col   items-center  h-screen">
      <div className="max-w-[600px] bg-white w-[90%] m-auto p-4">
        <div className="md:p-8 p-4 flex justify-center">
          <MdOutlineLocationOff size={70} />
        </div>
        <div className="mt-4 text-[#A1A1A1] pb-8 font-semibold text-center text-[20px]">
          Whoa! Looks loke there was an error with your zipcode. (or Please
          enter the zipcode of USA or Canada)
        </div>
        <Link to="/">
          <div className="flex justify-center">
            <button className="p-2 text-white font-semibold bg-[#DB5933]">
              Try Again
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Error;
