import React, { useState } from "react";
import { BsCopy } from "react-icons/bs";
import { TbPhoneCall } from "react-icons/tb";
import { FaCaretUp, FaPlus } from "react-icons/fa6";
import likeColor from "../../images/fi-sr-thumbs-up.svg";
import unlike from "../../images/fi-rr-social-network.svg";
import Vector from "../../images/Vector.png";
import Vector1 from "../../images/Vector1.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1170 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1170, min: 735 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  Lagremobile: {
    breakpoint: { max: 735, min: 500 },
    items: 1.5,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const cardDetails = [
  {
    name: "dhruv patel",
    role: "Accounting",
    like: "24",
    address: "205 Lila Extension Vietnam, Hanoi Western Cape, 93012",
    work: ["Management", "Private"],
    country: ["English", "German"],
  },
];

const Card = () => {
  const [like, setLike] = useState(false);
  const [vector, setVector] = useState(false);
  return (
    <div
      className="border rounded-lg bg-white"
      style={{ boxShadow: "0px 0px 1px gray" }}
    >
      <div className="xl:p-4 lg:p-3 p-4 gap-3 flex sm:flex-row flex-col rounded-lg">
        <div className=" lg:w-[auto] sm:w-[250px] w-full sm:h-auto h-[200px]  flex relative">
          <div>
            <img
              className="h-full w-full object-cover rounded-md"
              src={require("../../images/Image 1......png")}
              alt=""
            />
            <div className="absolute xl:left-3 lg:left-2 left-3  top-3 rounded-full p-1 px-2 text-sm text-[#00A451] bg-white">
              Get 10% OFF
            </div>
            <div className="top-3 flex gap-2 absolute xl:right-3 lg:right-2 right-3  ">
              <button
                className=" bg-white h-8 w-8 rounded-full flex flex-shrink-0 items-center justify-center "
                onClick={() => setVector(!vector)}
              >
                {!vector ? (
                  <img
                    src={Vector1}
                    className="h-[14px] w-[14px]"
                    alt=""
                    srcSet=""
                  />
                ) : (
                  <img
                    src={Vector}
                    className="h-[14px] w-[14px]"
                    alt=""
                    srcSet=""
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="w-2/3 ">
          {cardDetails.map((val, ind) => (
            <div key={ind} className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-0.5">
                  <span className="text-lg !leading-6 capitalize font-semibold">
                    {val.name}
                  </span>
                  <span className="text-[11px] leading-3 capitalize text-[#999999]">
                    {val.role}
                  </span>
                </div>
                <div className="flex flex-col text-center gap-0.5">
                  <button
                    className=" flex justify-center items-center p-1"
                    onClick={() => setLike(!like)}
                  >
                    {!like ? (
                      <img src={unlike} alt="" srcSet="" />
                    ) : (
                      <img src={likeColor} alt="" srcSet="" />
                    )}
                  </button>
                  <span className="text-[11px] leading-3 text-[#333333]">
                    {like
                      ? `You and ${val.like} others`
                      : "Be the first to like"}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 ">
                <span className="h-auto w-8 mt-1">
                  <img
                    className="h-4 w-4"
                    src={require("../../images/Vectorcard icon.png")}
                    alt=""
                    srcSet=""
                  />
                </span>
                <p className="text-sm font-medium  xl:w-1/2 w-2/3">
                  {val.address}
                </p>

                <span className="grid content-between ml-auto justify-end  h-auto w-8">
                  <FaCaretUp />
                  <BsCopy className="text-[#00CDFF]" />
                </span>
              </div>

              <div className="flex flex-wrap gap-2 items-center">
                {val.work.map((work, ind) => (
                  <div
                    key={ind}
                    className="bg-[#e4e2e2] px-3 pt-2 pb-2.5 text-[#666666] rounded-2xl leading-[12px]"
                  >
                    <div className="text-[11px] ">{work}</div>
                  </div>
                ))}
              </div>

              <div className="overflow-x-auto scrollbar flex items-center xl:gap-2 lg:gap-1 gap-2">
                <div className="bg-[#00CDFF] w-auto lg:px-2.5 xl:px-3.5 px-3.5 lg:py-2 py-2.5 xl:py-2.5  text-white flex items-center gap-1 rounded-lg">
                  <TbPhoneCall className="h-4 w-4" />
                  <span className="font-medium text-sm">Call</span>
                </div>
                <div className="flex  flex-shrink-0 items-center xl:gap-2 lg:gap-1 gap-2 ">
                  {val.country.map((va, ind) => (
                    <div
                      key={ind}
                      className="bg-[#FFF6E6] xl:px-3 lg:p-2 p-3  py-2 leading-[14px] rounded-2xl inline-flex items-center xl:gap-2 gap-1"
                    >
                      <img
                        src={require("../../images/US - United Statesenglish.png")}
                        alt=""
                        srcSet=""
                        className="lg:h-3 lg:w-3 xl:h-auto xl:w-auto"
                      />
                      <div className="text-[11px] ">{va}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#FFA500] xl:w-9 lg:w-7 w-9 xl:h-9 lg:h-7 h-9   rounded-full flex flex-shrink-0 items-center justify-center">
                  <FaPlus className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
