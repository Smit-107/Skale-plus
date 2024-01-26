import React from "react";
import { UseResizeScreenLayout640 } from "../Core/useScreenResize";

const PlaneCard = ({ plans, price }) => {
  const isScreenWide = UseResizeScreenLayout640();
  return (
    <div
      className={` sm:w-full border border-[#000] rounded-3xl  p-10  flex flex-col gap-4 lg:hover:transform lg:hover:scale-105 lg:transition-transform lg:duration-500 cursor-pointer bg-[#fff]`}
    >
      <div className="flex justify-center flex-col">
        <span className="text-[25px] sm:text-[28px] lg:text-[30px] xl:text-[34px] font-bold font-Montserrat text-center text-[#000]">
          {plans}
        </span>
        <span className="text-[12px] sm:text-[14px] lg:text-[16px]  font-normal font-Montserrat text-center text-[#000008]">
          Nemo enim ipsam voluptatem
        </span>
      </div>
      <div className="flex justify-center flex-col">
        <span className="text-[25px] sm:text-[28px] lg:text-[30px] xl:text-[48px] font-bold font-Montserrat text-center text-[#000]">
          ${price}
          <span className="text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[18px] font-normal text-[#00000088]">
            /mo
          </span>
        </span>
        <div className="flex flex-col gap-4">
          <span className="text-[10px] sm:text-[12px] font-normal font-Montserrat text-center flex items-center justify-center gap-3 text-[#00000088]">
            yearly <span className="bg-[#D9D9D9] rounded-xl px-3">15%off</span>
          </span>
          <button className="rounded-xl text-[13px] sm:text-[15px] lg:text-[16px] xl:text-[18px] text-[#fff] bg-[#FFA500] font-light p-3 md:p-3 mx-6">
            Choose Plan
          </button>
        </div>
      </div>
      <div className="ps-6 sm:ps-7 md:ps-0 flex flex-col gap-2 md:gap-2.5 pb-3 md:pb-0">
        {[
          { icon: true, text: "Unlimited Products" },
          { icon: false, text: "Custom Permissions" },
          { icon: false, text: "Custom Infrastructure" },
          { icon: true, text: "Custom Design & Features" },
          { icon: false, text: "Unlimited Updates" },
          { icon: true, text: "Unlimited Infrastructure" },
        ].map((item, index) => (
          <div
            className="flex justify-start gap-3 items-center text-[#000000CC] text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[18px] text-nowrap"
            key={index}
          >
            {item?.icon === true ? (
              <div>
                <svg
                  width={`${isScreenWide ? "18" : "12"}`}
                  height={`${isScreenWide ? "18" : "12"}`}
                  viewBox="0 0 19 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.8635 12.773C5.84742 12.773 5.83135 12.773 5.81673 12.7715C5.36512 12.7554 4.94858 12.5201 4.70597 12.1387C3.18598 9.75491 0.523082 7.53339 0.496774 7.51001C-0.0863747 7.02624 -0.168221 6.16102 0.315544 5.57641C0.79931 4.99326 1.66453 4.91141 2.24768 5.39372C2.34707 5.47556 4.27628 7.08178 5.93658 9.15715C7.61879 7.2557 11.1177 3.72904 16.5779 0.218452C17.2152 -0.192237 18.0658 -0.00662288 18.475 0.630603C18.8857 1.26783 18.7001 2.11844 18.0629 2.52766C10.6515 7.29224 7.00495 12.1635 6.96841 12.2117C6.70972 12.5654 6.29903 12.773 5.8635 12.773Z"
                    fill="#00A451"
                  />
                </svg>
              </div>
            ) : (
              <div>
                <svg
                  width={`${isScreenWide ? "18" : "12"}`}
                  height={`${isScreenWide ? "18" : "12"}`}
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7443 12C10.4237 12 10.1018 11.8771 9.85735 11.6326L0.367684 2.14299C-0.122561 1.65274 -0.122561 0.85793 0.367684 0.367684C0.85793 -0.122561 1.65274 -0.122561 2.14299 0.367684L11.6326 9.85734C12.1229 10.3476 12.1229 11.1424 11.6326 11.6326C11.3855 11.8771 11.0649 12 10.7443 12Z"
                    fill="#EB1C24"
                  />
                  <path
                    d="M1.25467 12C0.934072 12 0.612139 11.8771 0.367684 11.6326C-0.122561 11.1424 -0.122561 10.3476 0.367684 9.85734L9.85734 0.367684C10.3476 -0.122561 11.1424 -0.122561 11.6326 0.367684C12.1229 0.85793 12.1229 1.65274 11.6326 2.14299L2.14299 11.6326C1.8972 11.8771 1.5766 12 1.25467 12Z"
                    fill="#EB1C24"
                  />
                </svg>
              </div>
            )}
            <span className="">{item?.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaneCard;
