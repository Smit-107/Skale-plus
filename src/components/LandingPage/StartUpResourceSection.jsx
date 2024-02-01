import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Carousel from "react-multi-carousel";

const responsive = {
  dekstop: {
    breakpoint: { max: 1170, min: 1024 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 912 },
    items: 1.8,
    slidesToSlide: 1,
  },
  tabletSub: {
    breakpoint: { max: 912, min: 768 },
    items: 1.5,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 536 },
    items: 1,
    slidesToSlide: 1,
  },
  smallMobile: {
    breakpoint: { max: 536, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const resourcesData = [
  {
    title: "FlyOnTech Solutions",
    address: "304 - Angel Square, VIP Circle, Uttran, Mota Varachha - 395010",
    tags: "Intellectual Property Law",
    img: require("../../images/image1.png"),
    languages: ["EN", "KR"],
  },
  {
    title: "FlyOnTech Solutions",
    address: "304 - Angel Square, VIP Circle, Uttran, Mota Varachha - 395010",
    tags: "Accountant",
    img: require("../../images/image2.png"),
    languages: ["EN", "KR"],
  },
  {
    title: "FlyOnTech Solutions",
    address: "304 - Angel Square, VIP Circle, Uttran, Mota Varachha - 395010",
    tags: "Corporate Law",
    img: require("../../images/image3.png"),
    languages: ["KR", "EN"],
  },
];

const StartUpResourceSection = () => {

  
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth > 1170);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth > 1170);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="pt-[20px] sm:pt-[37px] bg-[#fff]">
      <p className="px-[15px] text-[#000] text-[25px] sm:text-[45px] not-italic font-bold sm:font-semibold leading-[130%] tracking-[-0.5px] sm:tracking-[-0.9px] text-center">
        Business & Startup Resources
      </p>
      <div className="hidden cursor-pointer sm:flex items-center justify-end mr-[50px] lg:mr-[200px] gap-1">
        <span className="text-[#ffa500] text-[13px] not-italic font-light tracking-[-0.26px]">
          See More
        </span>
        <ChevronRightIcon className="!text-[#ffa500]" fontSize="medium" />
      </div>
      {isSmallScreen ? (
        <div className="py-[42px] flex overflow-x-auto hide-scrollbar bg-[white] items-center xl:gap-7 gap-5 px-[17px] lg:px-[100px] lg:grid lg:grid-cols-3">
          {resourcesData.map((itm, index) => (
            <ResourceCard itm={itm} key={index} />
          ))}
        </div>
      ) : (
        <div className="sm:py-[40px] sm:px-[17px] bg-[white]">
          <Carousel
            responsive={responsive}
            infinite
            customTransition="all .5s ease-in-out"
            itemClass="pt-[25px] pb-[12.5px] flex justify-center"
            autoPlay={true}
            autoPlaySpeed={2000}
            arrows={false}
            showDots
            // customDot={<CustomDot />}
          >
            {resourcesData.map((itm, index) => (
              <div className="pb-5 px-3" key={index}>
                <ResourceCard itm={itm} />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default StartUpResourceSection;

const ResourceCard = ({ itm }) => {
  return (
    <div
      className="p-4 bg-white flex w-full  sm:w-[466px] max-w-full cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105"
      style={{
        boxShadow: "0px 0px 24px 0px rgba(0, 0, 0, 0.10)",
      }}
    >
      <img
        src={itm?.img}
        alt="ResourceImage"
        className="t-[83px] h-[83px] sm:w-[113px] sm:h-[113px] object-cover"
      />

      <div className="lg:ps-3 ps-5">
        <p
          className={`text-[#000]  text-[14px] sm:text-[15px] not-italic font-bold sm:font-semibold leading-[130%] tracking-[-0.22px] sm:tracking-[-0.3px] overflow-ellipsis overflow-hidden line-clamp-2 text-start`}
        >
          {itm?.title}
        </p>
        <p
          className={`text-[#000] text-[12px] sm:text-[12px] not-italic font-ligleading-[130%] tracking-[-0.2px] sm:tracking-[-0.24px] mt-[10px] overflow-ellipsis overflow-hidden line-clamp-2 text-start`}
        >
          {itm?.address}
        </p>

        
        <div className="flex items-center justify-between mt-[8px]">
          <p
            className={`rounded-[15px] lg:rounded-[19px] px-[8px] lg:px-[10px] py-[3px] lg:py-[5px] text-[12px] lg:text-[13px] not-italic font-normal leading-[130%] tracking-[-0.2px] sm:tracking-[-0.24px] overflow-ellipsis overflow-hidden line-clamp-1 text-[#fff] bg-[#FFA500]`}
          >
            {itm?.tags}
          </p>
          <div className="flex">
            {itm?.languages.map((item, index) => (
              <button
                key={index}
                className="font-semibold text-[12px] lg:text-[13px] p-1.5 px-2.5  bg-[#00000031] text-[#000] rounded-full "
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
