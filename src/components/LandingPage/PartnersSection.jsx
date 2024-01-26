import React from "react";

const PartnersSection = () => {
  return (
    <div className="sm:pt-[35px] pb-[20px] ">
      <div className="gap-4 flex px-[15px] flex-col justify-center ">
        <p className=" text-[#000] text-[26px]  sm:text-[48px] not-italic font-bold sm:leading-[72px] leading-[40px] tracking-[-0.39px] sm:tracking-[-0.72px] text-center">
          Our Partners
        </p>
        <p className="sm:flex  hidden  not-italic  justify-center  leading-[50px] sm:tracking-[-0.24px] " >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>
      <div className="m-auto mt-5 max-w-[1234px] max-h-[126px] sm:w-full w-[100%] sm:h-full h-[38px]">
        <img src={require("../../images/partners.png")} className=""  alt="" srcSet="" />
      </div>
    </div>
  );
};

export default PartnersSection;
