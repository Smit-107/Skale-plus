import React from "react";
import Card from "./Card";

const AllCard = () => {
  return (
    <div className="gap-3 flex flex-col">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default AllCard;
