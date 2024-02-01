import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1170 }, 
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1170, min: 735 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    Lagremobile: {
      breakpoint: { max: 735, min: 500 },
      items: 1.5,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  
  const servicesData = [
    {
      title: "LEGAL SERVICES",
      desc: "Access both local and global expertise at the tip of your hand. Skaleplus connects you with top-tier legal professionals specializing in various areas of law, such as, Startups, Corporate, Intellectual Property, and more.",
      img: require("../../images/card1.png"),
    },
    {
      title: "ACCOUNTING EXPERTISE",
      desc: "Skaleplus ensures you’re covered, whether its tax filing, strategic consulting, or meticulous bookkeeping. With us, you will connect with a local and global network of trusted and certified accountants who can support your vision and compliance.",
      img: require("../../images/card2.png"),
    },
    {
      title: "OFFICE SPACE ",
      desc: "With Skaleplus, you will have access to a wide range of choices to simplify your search for the ideal virtual address, a flexible hot desk, or a dedicated office space.",
      img: require("../../images/card3.png"),
    },
    {
      title: "ACCELERATORS",
      desc: "Explore our curated network of local and global accelerators, providing valuable opportunities for startups to thrive.",
      img: require("../../images/card4.png"),
    },
    {
      title: "STARTUP PROGRAMS",
      desc: "Discover a variety of startup programs, including government-backed initiatives aimed at promoting innovation and fostering growth. Through our platform, you can access a selection of both local and international programs. ",
      img: require("../../images/card5.png"),
    },
    {
      title: "INVESTORS",
      desc: "Attract investors to your business with our platform. Connect with a diverse pool of potential investors, both locally and globally, to fuel your growth and drive success.",
      img: require("../../images/card6.png"),
    },
    {
      title: "CO-FOUNDER MATCHING",
      desc: "Embark on an exciting journey to find co-founders through our platform! Connect with like-minded partners who share your vision and are eager to join you in driving your business to new horizons.",
      img: require("../../images/card7.png"),
    },
    {
      title: "BUSINESS MATCHING",
      desc: "Unlock endless possibilities with our business matching feature. Seamlessly connect with like-minded entrepreneurs, potential collaborators, and business opportunities that align perfectly with your goals.",
      img: require("../../images/card8.png"),
    },
    {
      title: "STARTUP MARKET",
      desc: "Discover the vibrant startup market with us, where innovation thrives. Explore a rich ecosystem of opportunities, including startup products, to ignite your entrepreneurial aspirations and potential collaborations.",
      img: require("../../images/card9.png"),
    },
    {
      title: "STARTUP EVENTS",
      desc: "Lorem ipsum dolor sit amet, consectetuer dipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
      img: require("../../images/card10.png"),
    },
    {
      title: "BLOGS",
      desc: "Lorem ipsum dolor sit amet, consectetuer dipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
      img: require("../../images/card11.png"),
    },
    {
      title: "STARTUPS",
      desc: "Lorem ipsum dolor sit amet, consectetuer dipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
      img: require("../../images/card12.png"),
    },
  ];
const Services = () => {
    
  const carouselRef = React.useRef(null);

  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const CustomLeftButton = () => {
    return (
      <div className="absolute top-[45%] hidden lg:flex  left-10">
        <button onClick={prevSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="66"
            viewBox="0 0 36 66"
            fill="none"
          >
            <path
              d="M32.5 62.5L5 31L32.5 3.5"
              stroke="#F5921D"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    );
  };
  const CustomRightButton = () => {
    return (
      <div className="absolute right-10 hidden top-[45%] lg:flex">
        <button onClick={nextSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="66"
            viewBox="0 0 36 66"
            fill="none"
          >
            <path
              d="M3.5 3.5L31 35L3.5 62.5"
              stroke="#F5921D"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    );
  };
  return (
    <div className="flex justify-center lg:px-[100px] sm:px-[28px] px-[13px] mb-[25px] sm:mt-[60px] relative  ">
      <div className="w-full">
        <CustomLeftButton />
        <Carousel
          ref={carouselRef}
          customTransition="all .5s ease-in-out"
          itemClass="pt-12 px-20 pb-12 flex justify-center"
          showDots
          arrows={false}
          autoPlay={true}
          infinite
          responsive={responsive}
          keyBoardControl={true}
          removeArrowOnDeviceType={["mobile"]}
          transitionDuration={500}
          autoPlaySpeed={2000}
          pauseOnHover
          shouldResetAutoplay={false}
          dotListClass="custom-dot-list-style"
        >
          {servicesData.map((item, index) => (
            <div
              key={index}
              className="bg-[#fff] px-10 pt-10 pb-20 w-[280px] sm:w-[310px] h-[410px] flex-shrink-0 cursor-pointer hover:transform hover:scale-105 transition-transform duration-500 "
              style={{
                boxShadow: "0px 0px 24px 0px rgba(0, 0, 0, 0.10)",
              }}
            >
              <div className="flex justify-center items-center">
                <div className="bg-[#F5921D] px-11 py-12 flex justify-center items-center rounded-xl ">
                  <img src={item.img} alt="Card1" width={56} height={56} />
                </div>
              </div>
              <div className="mx-[34px] my-[30px] bg-[#BCBCBC] h-[1px] " />
              <p className="text-[#000] text-center  text-[18px] sm:text-[20px] not-italic font-semibold leading-normal whitespace-nowrap">
                {item.title}
              </p>
              <p className="text-[#000] text-center text-[14px] not-italic font-light leading-normal mt-[30px] line-clamp-4">
                {item.desc}
              </p>
            </div>
          ))}
        </Carousel>
        <CustomRightButton />
      </div>
    </div>
  );
};

export default Services;
