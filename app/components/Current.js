import React from "react";
import { getCurrentDate } from "../utils/currentDate";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Current = ({ data }) => {
  const weatherIcon = data.current ? data.current.condition.icon : null;
  const currentDate = getCurrentDate();
  const location = data.location ? data.location.name : "Unknown";

  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 bg-black/25 p-6 rounded-xl">
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl text-white">{location}, Today</h1>
          <p className="text-white">{currentDate}</p>
        </div>
        {weatherIcon && (
          <div>
            <img className="w-[50px] object-cover" src={weatherIcon} alt="Weather Icon" />
          </div>
        )}
      </div>
      <div>
        {data.current && (
          <p className="text-5xl text-white">
            {data.current.temp_c.toFixed()}
            <span>°</span>
          </p>
        )}
        {data.current && <span className="text-white">{data.current.condition.text}</span>}
      </div>
      <div>
        {data.location && (
          <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl">
            <LocationOnIcon />
            <span>
              {data.location.name}, {data.location.region}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Current;
