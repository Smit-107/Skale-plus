import React, { createContext, useState } from "react";
import ListAll from "../../images/tab-icon/fi-sr-listAll.png";
import Account from "../../images/tab-icon/VectorAccount.png";
import Law from "../../images/tab-icon/fi-rr-gavellaw.png";
import Vectorgame from "../../images/tab-icon/Vectorgame.png";
import Office from "../../images/tab-icon/fi-rr-buildingoffice.png";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import Filter from "./Filter";

export const ProfetionContext = createContext();

const SearchTab = () => {
  const [tabNameActive, setTabNameActive] = useState("All");

  const tab = [
    {
      tabName: "All",
      icon: ListAll,
    },
    {
      tabName: "Accounting",
      icon: Account,
    },
    {
      tabName: "Law",
      icon: Law,
    },
    {
      tabName: "Virtual Office",
      icon: Vectorgame,
    },
    {
      tabName: "Physical Office",
      icon: Office,
    },
  ];

  return (
    <div>
      <div className=" space-x-2.5  overflow-x-auto scrollbar text-nowrap mb-4">
        {tab.map((val, ind) => (
          <div
            key={ind}
            onClick={() => setTabNameActive(val.tabName)}
            className={`py-2 select-none !px-4 cursor-pointer leading-6 items-center inline-flex gap-3 rounded-full border ${
              val.tabName === tabNameActive
                ? "bg-[#FFA500] border-[#FFA500]"
                : ""
            }`}
          >
            <img
              src={val.icon}
              className={`h-[18px] font-normal ${
                val.tabName === tabNameActive ? "text-white" : ""
              }`}
              style={{
                filter:
                  val.tabName === tabNameActive
                    ? "invert(100%) sepia(0%) saturate(7452%) hue-rotate(349deg) brightness(103%) contrast(103%)"
                    : "none",
              }}
              alt=""
              srcSet=""
            />

            <span
              className={`font-medium text-lg whitespace-nowrap ${
                val.tabName === tabNameActive ? "text-white" : ""
              }`}
            >
              {val.tabName}
            </span>
          </div>
        ))}
      </div>
      <ProfetionContext.Provider value={tabNameActive}>
        <Filter />
      </ProfetionContext.Provider>
    </div>
  );
};

export default SearchTab;
