import React from "react";

const Blogs = () => {
  const allArticles = [{}];

  return (
    <div className="flex justify-center lg:pb-16 container">
      <div className="flex flex-col gap-10 sm:gap-20 mx-6 sm:mx-16">
        <div className="flex flex-col font-Poppins text-[48px] font-bold text-[#000] text-center gap-0 lg:gap-3">
          <span className="text-[26px] md:text-[30px] lg:text-[48px] font-bold p-4 sm:mt-4 mt-0 sm:p-0 ">
            Blogs
          </span>
          <span className="text-[18px] sm:text-[20px] font-normal p-[5px] md:px-20 text-[#00000088]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </span>
        </div>

        {/* <div className="flex flex-col-reverse md:grid md:grid-cols-5 gap-[5%]">
          <div className="col-span-3 flex flex-col mt-8 md:mt-0">
            <div className={`relative`}>
              <div
                className={`
                    "opacity-100"
                    `}
              ></div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Blogs;
