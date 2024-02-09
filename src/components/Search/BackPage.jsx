import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
const BackPage = () => {
  return (
    <div>
      <div className=" flex flex-col gap-0.5 md:gap-1">
        {/* <div className=" flex flex-col gap-2.5 "> */}
        <div className=" leading-7 font-semibold  w-auto  text-[#00BBE8]">
          <span className="border-b sm:text-base text-sm  border-[#00BBE8] inline-flex items-center ">
            <FaArrowLeftLong className="me-3 mt-0.5" />
            Back
          </span>
        </div>
        <div className="sm:text-[40px] text-[32px] sm:leading-[52px] leading-[41px] font-bold ">
          Search
        </div>
        <div className="sm:text-sm text-xs text-[#868585]">
          Look up verified businesses and startups from us.
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default BackPage;
