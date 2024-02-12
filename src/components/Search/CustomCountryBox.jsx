import React, { useEffect, useRef, useState } from "react";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  Menu,
  MenuItem,
} from "@mui/material";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { RxChevronRight, RxCross2 } from "react-icons/rx";
import "simplebar-react/dist/simplebar.min.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,

  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1.5),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#000",
  marginTop: "1.5px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      borderRadius: "14px",
      paddingTop: "14px",
      paddingBottom: "10px",

      "&:focus": {
        width: "100%",
      },
    },
    border: "1px solid #DDDCDC",
    borderRadius: "20px",
  },
}));

const CustomCountryBox = ({
  title,
  imagePath,
  options,
  selectedOptions,
  setSelectedOptions,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const dropdownRef = useRef(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setTimeout(() => {
      setSearchFilter("");
    }, 300);
    setAnchorEl(null);
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    e.stopPropagation();
  };

  // const handleCheckboxChange = (val) => {
  //   const isSelected = selectedOptions.includes(val.label);
  //   if (isSelected) {
  //     return;
  //   } else {
  //     setSelectedOptions([val.label]);
  //   }
  // };

  const handleCheckboxChange = (val) => {
    const isSelected = selectedOptions.includes(val.label);
    if (!isSelected) {
      setSelectedOptions([val]);
    }
    handleClose()
  };

  console.log("setSelectedOptions", selectedOptions);

  const filteredOptions = options?.filter((option) =>
    option.label.toLowerCase().includes(searchFilter.toLowerCase())
  );

  var updatedTitle;
  if (selectedOptions.length === 0) {
    updatedTitle = title;
  } else if (selectedOptions.length === 1) {
    // updatedTitle = "Country: " + selectedOptions[0].label;
    updatedTitle = selectedOptions[0].label;
  }

  return (
    <div className="customDropDown select-none">
      <div
        key={title}
        className="py-1.5 cursor-pointer px-3 leading-6 items-center bg-[#F3F2F2] w-max flex  gap-2 rounded-lg border border-[#3A3A3A]"
        onClick={handleClick}
      >
        {selectedOptions.length > 0 ? (
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${selectedOptions[0].code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${selectedOptions[0].code.toLowerCase()}.png`}
            alt=""
            className="w-auto"
          />
        ) : (
          <img
            src={imagePath}
            className="h-[16px] font-normal"
            alt=""
            srcSet=""
          />
        )}

        {/* <span className="font-medium ">{updatedTitle}</span> */}

        <span className="font-medium flex items-center gap-2 ">
          {updatedTitle}
        </span>

        <div className="flex items-center mt-[2px] duration-1000 justify-center">
          {open ? (
            <FaCaretUp className="mt-0.5" />
          ) : (
            <FaCaretDown className="" />
          )}
        </div>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="mt-0.5 customCountry !overflow-y-hidden h-full !overflow-x-hidden !w-full"
        sx={{
          padding: "20px !important",
          "& .MuiMenu-paper": {
            // overflowY: "hidden",
            // scrollbarWidth: 'thin',
            "&::-webkit-scrollbar": {
              width: "6px !important",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#A2A2A2",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#F6F6F6",
              borderRadius: "4px",
            },
          },
        }}
      >
        <div className="text-lg font-bold mx-1.5">{title}</div>
        <Divider className="!my-2  !mx-1" />

        <div className=" mb-2 ">
          <Search className="!ms-0">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              id={`search-${title}`}
              inputProps={{ "aria-label": "search" }}
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                setSearchFilter(e.target.value);
                console.log(e.target.value);
              }}

              // onChange={handleSearchInputChange}
            />
          </Search>
        </div>

        <div className="customScroll !max-h-[calc(450px-124px)] !pl-0 !py-0 flex flex-col gap-1.5 !pe-2 ">
          {filteredOptions.map((val, ind) => (
            <MenuItem
              key={ind}
              className={`!text-sm !font-medium w-full !px-3 !py-2 relative   ${
                selectedOptions.some((option) => option.label === val.label)
                  ? "!bg-[#FFA500]"
                  : "bg-white"
              }`}
              onClick={() => {
                handleCheckboxChange(val);
              }}
            >
              <div
                className="flex items-center  !w-full justify-between gap-2"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCheckboxChange(val);
                }}
              >
                <div className={`flex items-center gap-2 w-full`}>
                  <img
                    loading="lazy"
                    width="20"
                    srcSet={`https://flagcdn.com/w40/${val.code.toLowerCase()}.png 2x`}
                    src={`https://flagcdn.com/w20/${val.code.toLowerCase()}.png`}
                    alt=""
                    className="w-auto"
                  />
                  <span
                    className={`text-base w-auto  max-w-[75%] overflow-hidden whitespace-nowrap overflow-ellipsis ${
                      selectedOptions.some(
                        (option) => option.label === val.label
                      )
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {" "}
                    {val.label}
                  </span>
                </div>
                <div className="absolute top-0 right-2  z-auto  h-full flex items-center justify-center">
                  {selectedOptions.some(
                    (option) => option.label === val.label
                  ) ? (
                    <RxCross2 className="font-bold  text-white" />
                  ) : (
                    <RxChevronRight className="font-bold " />
                  )}
                </div>
              </div>
            </MenuItem>
          ))}
        </div>
      </Menu>
    </div>
  );
};

export default CustomCountryBox;
