import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Logo from "../../images/logo.png"; // Import your logo image
import LinkedInIcon from "../../images/linkedin (1) 1linkdin.png"; // Import LinkedIn icon
import InstagramIcon from "../../images/instagram 1insta.png"; // Import Instagram icon
import TwitterIcon from "../../images/twitter 1x.png"; // Import Twitter icon

const Footer = () => {
  // const windowWidth = window.innerWidth;
  // var myImage;
  // var myIcon;

  return (
    <footer className="flex flex-col !justify-center items-end ">
      {/* <Container> */}
      <div className="px-[20px] md:px-[40px] lg:px-[75px] w-full">
        <hr className="border-bottom border-2 rgba(0, 0, 0, 0.50) my-[10px]" />
      </div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        // style={{ height: "222px" }}
        // sx={{ borderTop: "1px solid rgba(0, 0, 0, 0.50)" }}
        // className="text-start pt-4 md:pt-0"
        // spacing={2}
        className=" md:px-[40px] lg:px-[75px] md:py-[25px] lg:py-[50px] px-[20px] py-[18px]"
      >
        {/* Left side */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column" }}
        >
          <img
            src={Logo}
            alt=""
            style={{ width: "130px", height: "45px" }}
            className="sm:w-[157px] w-[130px] sm:h-[50px] h-[45px] mb-4"
          />
          <Typography
            variant="body2"
            style={{
              fontSize: "15px",
              height: "24px",
              textAlign: "start",
              paddingTop: "8px",
            }}
          >
            © Photo, Inc. 2019. We love our users!
          </Typography>
        </Grid>

        {/* Right side */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ pt: { xs: 0, sm: 0, md: 2, lg: 0 } }}
          flexDirection=""
          display="flex"
          className="text-start"
        >
          <Grid container spacing={2} className="fotter-list">
            <Grid item xs={4} md={3}>
              <div className="flex flex-col sm:text-[15px] text-xs md:text-center sm:text-end text-center">
                <span className="">About</span>
                <span className="">Pricing</span>
                <span className="">Contact</span>
              </div>
            </Grid>
            <Grid item xs={4} md={3} className="">
              <div className="flex flex-col sm:text-[15px] text-xs text-center">
                <span className="">Services</span>
                <span className="">Blogs</span>
                <span className="">Events</span>
              </div>
            </Grid>
            <Grid item xs={4} md={3} className="">
              <div className="flex flex-col sm:text-[15px] text-xs  md:text-center sm:text-start text-center">
                <span className="">Privacy policy</span>
                <span className="">Terms of Use</span>
              </div>
            </Grid>
            <Grid item xs={6} sm={8} sx={{ display: { md: "none" } }}>
              <img
                src={Logo}
                alt=""
                className="sm:w-[157px] sm:h-[50px] w-[119px] h-[37px]"
              />
            </Grid>
            <Grid item xs={6} sm={4} md={3} className="w-full "  >
              <Box
                sx={{ flexDirection: { md: "column" } }}
                className="flex justify-between items-center w-full w-75"
              >
                <span className="!mb-0 flex  justify-center  media-set-text  sm:text-base text-xs sm:w-full w-3/4">
                  Follow us:
                </span>
                <div className=" flex lg:justify-between  justify-around w-full pt-2 padding-0">
                  <img
                    className="lg:h-9 sm:h-[26px] h-[20px]  lg:w-9 sm:w-[26px] w-[20px] "
                    src={LinkedInIcon}
                    alt="LinkedIn"
                  />
                  <img
                    className="lg:h-9 sm:h-[26px] h-[20px]  lg:w-9 sm:w-[26px] w-[20px] "
                    src={InstagramIcon}
                    alt="Instagram"
                  />
                  <img
                    className="lg:h-9 sm:h-[26px] h-[20px]  lg:w-9 sm:w-[26px] w-[20px] "
                    src={TwitterIcon}
                    alt="Twitter"
                  />
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ pl: 2, pt: "0px" }}>
              <Typography
                variant="body2"
                sx={{
                  pt: 0,
                  fontSize: { sm: "15px", xs: "11px" },
                  display: { md: "none" },
                }}
                style={{
                  height: "24px",
                  textAlign: "start",
                }}
                className="sm:text-[15px] text-[7px] "
              >
                © Photo, Inc. 2019. We love our users!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* </Container> */}
    </footer>
  );
};

export default Footer;
