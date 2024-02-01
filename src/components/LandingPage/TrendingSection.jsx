import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ShowMoreButton from "./ShowMoreButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UseResizeScreenLayout640 } from "../Core/useScreenResize";

const allArticles = [
  {
    firstName: "FlyOnTech Solutions",
    title: "304 - Angel Square, VIP Circle, Uttran, Mota Varachha - 395010",
    tags: "Intellectual Property Law",
    img: require("../../images/Trend/Vector (1).png"),
    hashtags: ["EN", "KR","XYZ"],
  },
  {
    firstName: "FlyOnTech Solutions",
    title: "304 - Angel Square, VIP Circle, Uttran, Mota Varachha - 395010",
    tags: "Accountant",
    img: require("../../images/Trend/Vector (2).png"),
    hashtags: ["EN", "KR","XYZ"],
  },
  {
    firstName: "FlyOnTech Solutions",
    title: "304 - Angel Square, VIP Circle, Uttran, Mota Varachha - 395010",
    tags: "Corporate Law",
    img: require("../../images/Trend/Vector (3).png"),
    hashtags: ["KR", "EN","XYZ"],
  },
  {
    firstName: "FlyOnTech Solutions",
    title: "304 - Angel Square, VIP Circle, Uttran, Mota Varachha - 395010",
    tags: "Intellectual Property Law",
    img: require("../../images/Trend/Vector (1).png"),
    hashtags: ["EN", "KR","XYZ"],
  },
  {
    firstName: "FlyOnTech Solutions",
    title: "304 - Angel Square, VIP Circle, Uttran, Mota Varachha - 395010",
    tags: "Accountant",
    img: require("../../images/Trend/Vector (2).png"),
    hashtags: ["EN", "KR","XYZ"],
  },
  {
    firstName: "FlyOnTech Solutions",
    title: "304 - Angel Square, VIP Circle, Uttran, Mota Varachha - 395010",
    tags: "Corporate Law",
    img: require("../../images/Trend/Vector (3).png"),
    hashtags: ["KR", "EN","XYZ"],
  },{
    firstName: "FlyOnTech Solutions",
    title: "304 - Angel Square, VIP Circle, Uttran, Mota Varachha - 395010",
    tags: "Intellectual Property Law",
    img: require("../../images/Trend/Vector (1).png"),
    hashtags: ["EN", "KR","XYZ"],
  },
  {
    firstName: "FlyOnTech Solutions",
    title: "304 - Angel Square, VIP Circle, Uttran, Mota Varachha - 395010",
    tags: "Accountant",
    img: require("../../images/Trend/Vector (2).png"),
    hashtags: ["EN", "KR","XYZ"],
  },
  {
    firstName: "FlyOnTech Solutions",
    title: "304 - Angel Square, VIP Circle, Uttran, Mota Varachha - 395010",
    tags: "Corporate Law",
    img: require("../../images/Trend/Vector (3).png"),
    hashtags: ["KR", "EN","XYZ"],
  },
];

const TrendingSection = () => {
  // const itm = 123;
  const [showMore, setShowMore] = useState(false);
  const isScreenWide = UseResizeScreenLayout640();

  useEffect(() => {
    if (isScreenWide) {
      setShowMore(false);
    } else {
      setShowMore(true);
    }
  }, [isScreenWide]);


  const customTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        myCustomBreakpoint: 1024, // Custom breakpoint for this component
      },
    },
  });



  return (
    <ThemeProvider theme={customTheme}>

    <div className="pt-[35px]">
      <p className="px-[15px] text-[#000]  text-[25px] sm:text-[45px] not-italic font-bold sm:font-semibold leading-[130%] tracking-[-0.5px] sm:tracking-[-0.9px] text-center">
        Trending on Skaleplus
      </p>

      {/* <Link href="/blogs"> */}
      <div className="hidden cursor-pointer sm:flex items-center justify-end mr-[50px] lg:mr-[200px] gap-1">
        <p className="text-[#ffa500]  text-[13px] not-italic font-light tracking-[-0.26px]">
          See More
        </p>
        <ChevronRightIcon className="text-[#ffa500]" fontSize="medium" />
      </div>
      {/* </Link> */}

      <Grid
        container
        spacing={{ xs: 0, md: 3,sm:1}}
        className=" px-[15px] gap-6 sm:gap-0 md:px-[50px] lg:px-[100px] xl:px-[180px]  pt-[20px] sm:pt-[40px] "
      >
        {(!showMore ? allArticles?.slice(0, 6) : allArticles?.slice(0, 3))?.map(
          (itm, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              lg={4}

              className="cursor-pointer sm:!mt-8 !pt-0 hover:transform hover:scale-105  transition-transform duration-500"
            >
                
              <Grid container spacing={0} className="" >
                <Grid
                  item
                  xs={2}
                  className="text-[#F2F4F6] text-center text-[35px] not-italic font-bold leading-normal w-[48px] h-[50px]"
                >
                  {index + 1}
                </Grid>
                <Grid item xs={10} className="flex  items-center">
                  <div className="flex items-center gap-[10px]">
                    <img
                      src={itm.img}
                      alt="profile"
                      className="h-[25px] w-[25px]"
                    />
                    <p className="text-[#000]  text-[14px] not-italic font-light">
                      {(itm?.firstName ?? '') 
                      }
                    </p>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={0}>
                <Grid item xs={2}></Grid>
                <Grid item xs={10}>
                  <p className="text-[#000]  text-[15px] not-italic text-start font-semibold leading-normal">
                    {itm?.title}
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <p className="text-[#000]  text-[14px] overflow-ellipsis overflow-hidden line-clamp-1 not-italic font-semibold leading-normal">
                      {/* {formatDate(itm?.createdAt)} */}
                      {itm?.tags}
                    </p>

                    <div className="flex items-center gap-[5px]">
                      {itm?.hashtags
                        ?.slice(0, 3)
                        .map((hashtag, hashtagIndex) => (
                          <div
                            key={hashtagIndex}
                            className="bg-[#F2F4F6] px-[20px] py-[2px] rounded-lg text-[#555]  text-[11px] not-italic font-light leading-normal"
                          >
                            {hashtag}
                          </div>
                        ))}
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          )
        )}
      </Grid>
      <ShowMoreButton showMore={showMore} setShowMore={setShowMore} />
      
    </div>
    </ThemeProvider>
  );
};

export default TrendingSection;
