

import React from "react";
import ListAll from "../../images/tab-icon/fi-sr-listAll.png";
import Account from "../../images/tab-icon/VectorAccount.png";
import Law from "../../images/tab-icon/fi-rr-gavellaw.png";
import Vectorgame from "../../images/tab-icon/Vectorgame.png";
import Office from "../../images/tab-icon/fi-rr-buildingoffice.png";

const SearchTab = () => {
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
    <div className=" space-x-2.5 overflow-x-auto scrollbar text-nowrap ">
      {tab.map((val, ind) => (
        <div
          key={ind}
          className="py-2 !px-4 leading-6 items-center inline-flex gap-3 rounded-full border"
        >
          <img
            src={val.icon}
            className="h-[18px] font-normal"
            alt=""
            srcSet=""
          />
          <span className="font-medium text-lg whitespace-nowrap">{val.tabName}</span>
        </div>
      ))}
    </div>
  );
};

export default SearchTab;
