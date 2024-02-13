"use client";
import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Keyboard,
  Mousewheel,
  EffectCards,
} from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-cards";
import PlaneCard from "./PlanCard";
import PartnersSection from "../LandingPage/PartnersSection";

const Pricing = () => {
  const [personalUse, setPersonalUse] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pricingData = personalUse
    ? [
        { price: "0.00", plans: "Free" },
        { price: "4.99", plans: "Standard" },
        { price: "9.99", plans: "Premium" },
      ]
    : [
        { price: "5.00", plans: "Free" },
        { price: "9.99", plans: "Standard" },
        { price: "14.99", plans: "Premium" },
      ];

  return (
    <React.Fragment>
      <div className="container pb-10 sm:pb-12">
        <div className="mx-6 sm:mx-10 flex flex-col gap-20">
          <div className="flex flex-col gap-4 lg:gap-6 text-[48px] font-bold  text-center  text-[#000]">
            <span className=" p-4 sm:p-0 text-[26px] md:text-[30px] lg:text-[48px] font-bold">
              Plans and Pricing
            </span>
            <span className="text-[18px] sm:text-[20px] font-normal p-2 md:px-20 text-[#00000088]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </span>
          </div>

          <div className="flex justify-center flex-col gap-6">
            <div className="flex justify-center gap-5">
              <button
                className={`${
                  personalUse
                    ? " border border-[#000] bg-[#000] text-[#fff]"
                    : "bg-[#E4E5E6] border border-[#E4E5E6] text-[#000] shadow-md"
                } rounded-md text-[14px] text-center  leading-normal tracking-[-0.225px] font-medium px-6 py-2 sm:px-14 sm:py-3 whitespace-nowrap`}
                onClick={() => setPersonalUse(true)}
              >
                Personal Use
              </button>
              <button
                className={`${
                  !personalUse
                    ? "bg-[#000] border border-[#000] text-[#fff]"
                    : "bg-[#E4E5E6] border border-[#E4E5E6] text-[#000] shadow-md"
                }  rounded-md text-[14px] text-center leading-normal tracking-[-0.225px] font-medium px-6 py-2 sm:px-14 sm:py-3 whitespace-nowrap`}
                onClick={() => setPersonalUse(false)}
              >
                Business Use
              </button>
            </div>
            <div className="grid lg:grid-cols-3 justify-center gap-10 mt-5 ">
              {windowSize.width <= 1023 ? (
                <div className="ps-0 md:ps-0 w-[300px] !bg-[#fff]">
                  <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper swiper-container !bg-[#fff] "
                  >
                    {pricingData.map((item, index) => (
                      <SwiperSlide
                        key={index}
                        id="swiperCarousel"
                        className="customSwiperSlide"
                      >
                        <PlaneCard plans={item?.plans} price={item?.price} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              ) : (
                pricingData.map((item, index) => (
                  <PlaneCard
                    key={index}
                    plans={item?.plans}
                    price={item?.price}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pricing;
