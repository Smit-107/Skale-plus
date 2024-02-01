
import React from "react";
import About_Image from "../../images/AboutPage.png";
import PartnersSection from "../LandingPage/PartnersSection";

const About = () => {
 

  return (
    <React.Fragment>
     <div className="container md:pb-20 lg:pb-24 pb-10">
        <div className="mx-4 sm:mx-10 flex flex-col gap-12 md:gap-28 ">
          <div className="flex flex-col text-center gap-4 lg:gap-4 text-[48px] font-bold text-[#000] ">
            <span className=" p-[10px] sm:p-0 text-[30px] md:text-[30px] lg:text-[48px] font-bold">
              About
            </span>
            <span className="text-[18px] sm:text-[20px] font-normal p-[5px] md:px-20 text-[#00000088]">
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-12 ">
            <div className="w-[60%] sm:w-[50%]">
              <img src={About_Image} alt="about" className="w-full h-auto" />
            </div>
            <div className="flex flex-col gap-7 text-start ">
              <div className="flex flex-col gap-2 text-[#000] ">
                <span className="text-[22px] sm:text-[24px] font-bold">
                  Sed ut perspiciatis
                </span>
                <span className="text-[14px] md:text-[16px] lg:text-[18px] text-[#00000088] ">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur.
                </span>
              </div>
              <div className="flex flex-col gap-3 text-[#000]">
                <span className="text-[22px] sm:text-[24px]  font-bold">
                  Sed ut perspiciatis
                </span>
                <span className="text-[14px] md:text-[16px] lg:text-[18px] text-[#00000088] ">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur.
                </span>
              </div>
              <div className="flex flex-col gap-3 text-[#000]">
                <span className="text-[22px] sm:text-[24px] font-bold">
                  Sed ut perspiciatis
                </span>
                <span className="text-[14px] md:text-[16px] lg:text-[18px] text-[#00000088]">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:pt-0  pt-[20px]">
      <PartnersSection />
    </div>
    </React.Fragment>
  );
};

export default About;
