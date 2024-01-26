"use client";
import React, { useState } from "react";
import { CustomTab, TabPanel, a11yProps } from "../Core/CustomMUIComponents";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Menu, MenuItem, Tab } from "@mui/material";
import EventsCard from "../LandingPage/EventsCard";
import PartnersSection from "../LandingPage/PartnersSection";

const Events = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("Punjab");
  const [customLocation, setCustomLocation] = useState("");

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLocationSelect = (location) => {
    if (location === "Custom Location") {
      // Show a text box for custom location input
      const input = prompt("Enter your custom location:", customLocation);
      if (input !== null) {
        setCustomLocation(input);
        setSelectedLocation(input);
      }
    } else {
      // Revert to displaying the selected location
      setSelectedLocation(location);
      setCustomLocation(""); // Reset customLocation when another location is selected
    }

    handleCloseMenu();
  };

  const eventTab = [
    { tabName: "All" },
    { tabName: "Online" },
    { tabName: "Offline" },
    { tabName: "Today" },
    { tabName: "This Weekend" },
    { tabName: "Free" },
    { tabName: "Music" },
    { tabName: "Food & Drink" },
    { tabName: "Charity & Causes" },
  ];

  return (
    <React.Fragment>
      <div className="container pb-10 sm:pb-12">
        <div className="mx-4 sm:mx-10 flex flex-col sm:gap-12 gap-6">
          <div className="flex flex-col font-Poppins text-[48px] font-bold text-[#000] text-center  p-0 lg:gap-2.5">
            <span className="text-[26px] md:text-[30px] lg:text-[48px] font-bold p-4 lg:p-0">
              Startup Events
            </span>
            <span className="text-[18px] sm:text-[20px] font-normal p-[5px] md:px-20 text-[#00000088]">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </span>
          </div>
          <div className="flex flex-col gap-5 md:gap-8">
            {/* <div className="flex  flex-row items-start md:items-center gap-1 md:gap-3">
              <span className="font-Poppins text-[18px] lg:text-[28px] font-bold text-[#000]">
                Popular in
              </span>
              <button>
                <span className="font-Poppins text-[18px] lg:text-[28px] font-bold text-[#FFA500] flex items-center justify-center gap-1.5">
                  <ArrowForwardIosIcon className="!text-[#FFA500] text-[15px] lg:!text-[23px] !rotate-90" />
                  Punjab
                </span>
              </button>
            </div> */}
            <div className="flex flex-row items-start md:items-center gap-1 md:gap-3">
              <span className="font-Poppins text-[18px] lg:text-[28px] font-bold text-[#000]">
                Popular in
              </span>
              <button onClick={handleOpenMenu}>
                <span className="font-Poppins text-[18px] lg:text-[28px] font-bold text-[#FFA500] flex items-center justify-center gap-1.5">
                  <ArrowForwardIosIcon className="!text-[#FFA500] text-[15px] lg:!text-[23px] !rotate-90" />
                  {selectedLocation === "Custom Location" ? (
                    <input
                      type="text"
                      value={customLocation}
                      onChange={(e) => setCustomLocation(e.target.value)}
                      placeholder="Enter custom location"
                    />
                  ) : (
                    selectedLocation
                  )}
                </span>
              </button>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                <MenuItem
                  onClick={() => handleLocationSelect("Current Location")}
                >
                  Use my current location
                </MenuItem>
                <MenuItem
                  onClick={() => handleLocationSelect("Custom Location")}
                >
                  Browse online events
                </MenuItem>
                {/* Add more menu items as needed */}
              </Menu>
            </div>
            <div className="flex flex-col gap-12">
              <CustomTab
                variant="scrollable"
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
              >
                {eventTab?.map((item, index) => (
                  <Tab
                    key={index}
                    label={item?.tabName}
                    {...a11yProps(index)}
                    className="whitespace-nowrap"
                    // onClick={() => setMenCategoryId([item?.id])}
                  />
                ))}
              </CustomTab>
              <TabPanel value={value} index={value}>
                <div className="w-full ">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-20">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                      <EventsCard key={index} />
                    ))}
                  </div>
                </div>
              </TabPanel>
              <div className="flex justify-center">
                <button className="rounded-[18px] lg:rounded-2xl bg-[#FFA500] px-[30px] py-[12px] text-[#fff] font-Montserrat font-medium not-italic leading-normal text-[12px] md:text-[20px]">
                  see more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:pt-0  pt-[20px]">
        <PartnersSection />
      </div>
    </React.Fragment>
  );
};

export default Events;
