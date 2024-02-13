import React from "react";
import SearchTab from "./SearchTab";
import Filter from "./Filter";
import SearchBox from "./SearchBox";
import BackPage from "./BackPage";

const MainPage = () => {
  return (
    <div className="container1 sm:px-10 px-4 xl:px-0 text-start md:pb-20 lg:pb-24 pb-10">
      <div className="flex flex-col gap-4 ">
        <BackPage />
        <SearchTab />
      </div>
    </div>
  );
};

export default MainPage;
