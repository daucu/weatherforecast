import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import zipcodes from "zipcodes";
function Body() {
  // states
  const [zipcode, setZipcode] = React.useState(""); // zipcode state
  const [data, setData] = useState([]); // fetched data state

  const navigate = useNavigate();
  // code to get the data from the zipcode
  const handlevalue = async (e) => {
    // validation for not empty zipcode
    if (zipcode === "" || zipcode === null) {
      toast.error("Please enter the zipcode");
      return;
    }
    const data = zipcodes.lookup(zipcode);
    // if data is available then set the states
    if (data) {
      // API to get weather information
      await axios
        .get(
          `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${data.latitude}&lon=${data.longitude}`
        )
        .then((res) => {
          console.log(res.data.properties.timeseries[0].data.instant.details);
          setData(res.data.properties.timeseries[0].data.instant.details);

          navigate("/result", {
            state: {
              data: res.data.properties.timeseries[0].data.instant.details,
              zipcode: zipcode,
              city: data.city,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      navigate("/error");
    }
  };

  return (
    <div>
      <h1 className="bg-[#2C6FB3] flex flex-col justify-center items-center  h-screen">
        <div className="text-white font-bold text-[30px]">Weather Forecast</div>
        <div className="text-[20px]  w-[90%] text-[#c0bfbf] md:mt-8 mt-6 font-semibold text-center">
          Please enter the zipcode of USA or Canada to get the weather forecast
          of that area.
        </div>
        <div className="md:flex md:mt-12 mt-8 md:w-[50%] w-[95%] items-center justify-evenly   ">
          <div className="md:w-[50%] w-[90%]  md:m-0 m-auto">
            <input
              type=""
              placeholder="Enter Zipcode..."
              className="w-full p-2  text-black text-[20px] "
              value={zipcode}
              onChange={(e) => {
                setZipcode(e.target.value);
              }}
            />
          </div>
          <div className="md:w-[45%] w-[90%] md:m-0 m-auto">
            <button
              className="bg-[#DB5933] text-white font-bold text-[20px] md:w-[100%] md:mt-0 mt-4 w-full  p-2 "
              onClick={handlevalue}
            >
              Search
            </button>
          </div>
        </div>
      </h1>
    </div>
  );
}

export default Body;
