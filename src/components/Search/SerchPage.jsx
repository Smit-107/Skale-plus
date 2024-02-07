import React from "react";
import Back from "./Back";
import SearchTab from "./SearchTab";
import Filter from "./Filter";
import SearchBox from "./SearchBox";
import PaginationControlled from "./Pagination";
const SerchPage = () => {
  return (
    <div className="text-start xl:mx-20 lg:mx-14  md:mx-20 sm:mx-7 mx-5 md:pb-20 lg:pb-24 pb-10">
      <div className="flex flex-col gap-4">
        <Back />
        <SearchTab />
        <Filter />
        <SearchBox />
      </div>
    </div>
  );
};

export default SerchPage;
