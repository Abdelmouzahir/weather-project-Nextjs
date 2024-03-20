import React from "react";
import SearchIcon from "@mui/icons-material/Search";



const Input = ({ handleSearch, setLocation }) => {
    
  return (
    <form className="flex items-center md:w-2/4 w-full order-2 md:order-1">
      <input
        type="text"
        className="w-full rounded-md p-1 outline-none text-black"
        placeholder="Search..."
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="ml-[-25px] text-black cursor-pointer">
        <SearchIcon/>
      </div>
       <button className=" ml-3 mr-2 text-black cursor-pointer" type="submit">Home</button>      
    </form>
  );
};


export default Input;

