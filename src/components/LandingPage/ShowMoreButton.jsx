import React from 'react';

const ShowMoreButton = ({ showMore, setShowMore }) => {
  return (
    <div className="flex items-center justify-center mt-10">
      <button
        onClick={() => setShowMore(!showMore)}
        className="flex sm:hidden  px-[30px] py-[12px] text-center bg-[#FFA500] rounded-[18px] text-[#fff] text-[12px] font-medium not-italic leading-normal"
      >
        {!showMore ? 'See Less' : 'See More'}
      </button>
    </div>
  );
};

export default ShowMoreButton;
