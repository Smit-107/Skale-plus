import React from "react";

const NotSelectCard = () => {
  return (
    <div className="lg:flex hidden flex-col justify-center items-center h-full">
      <div className="xl:w-[500px] xl:h-[500px] w-[350px] h-[350px] ">
        <img
          className="w-full h-full"
          src={require("../../../images/Search engines-bro 1serch.png")}
          alt=""
          srcSet=""
        />
      </div>
      <div className="font-bold text-[32px]  leading-[58px] ">
        Select one of the cards
      </div>
      <p className="text-[18px] leading-8 text-[#646464]">
        Find the business or start-up that suits your needs.
      </p>
    </div>
  );
};

export default NotSelectCard;
