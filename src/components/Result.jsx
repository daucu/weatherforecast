import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BsClouds } from "react-icons/bs";
import { WiDegrees } from "react-icons/wi";

function Result() {
  // get state data
  const { state } = useLocation();

  console.log(state);
  return (
    <div className="bg-[#2C6FB3] p-4 flex flex-col   items-center  h-screen">
      <div className="text-center flex justify-center">
        <Link to="/">
          <button className="bg-[#A1A1A1] text-white font-semibold p-2">
            Home
          </button>
        </Link>
      </div>
      <div className="max-w-[600px] w-[90%] m-auto p-4">
        <div className=" bg-white p-4">
          <div className="flex justify-center p-2  ">
            <BsClouds className="text-[#A1A1A1] text-[50px]" />
          </div>
          <div className="flex items-center  justify-center">
            <div className="md:text-[40px] flex  text-[20px] font-semibold text-[#A1A1A1]">
              {state.data.relative_humidity}{" "}
              <WiDegrees size={50} className="text-[#A1A1A1]" />
            </div>
          </div>
          <div className="  text-center text-[20px] text-[#A1A1A1] font-bold ">
            Few Clouds
          </div>
          <div className="md:flex  mt-24 items-center justify-between">
            <div className="md:w-1/2 md:mt-0 mt-4 w-full">
              <div className="text-[20px] text-center text-[#A1A1A1]">
                Humidity : {state.data.relative_humidity}%
              </div>
            </div>
            <div className="md:w-1/2 md:mt-0 mt-4 w-full">
              <div className="text-[20px] text-center text-[#A1A1A1]">
                Wind Speed : {state.data.wind_speed} MPH
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 text-[#A1A1A1] text-[20px] text-center font-semibold">
          Location | {state.city}
        </div>
      </div>
    </div>
  );
}

export default Result;
