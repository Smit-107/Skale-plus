import {
  Checkbox,
  Divider,
  FormControlLabel,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import "simplebar-react/dist/simplebar.min.css";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

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
      borderRadius: "10px",
      paddingTop: "10px",
      paddingBottom: "10px",

      "&:focus": {
        width: "100%",
      },
    },
    border: "1px solid #DDDCDC",
    borderRadius: "20px",
  },
}));

const CustomDropDown = ({
  title,
  imagePath,
  options,
  selectedOptions,
  setSelectedOptions,
}) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState({});

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const dropdownRef = useRef(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  if (setAnchorEl === null) {
    setSearchFilter("");
  }

  const handleKeyDown = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
  };

  const handleCheckboxChange = (valueChecked) => {
    const isSelected = selectedOptions.includes(valueChecked);
    if (isSelected) {
      setSelectedOptions(
        selectedOptions.filter((option) => option !== valueChecked)
      );
    } else {
      setSelectedOptions([...selectedOptions, valueChecked]);
    }
  };

  const filteredOptions = options?.filter((option) =>
    option.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setSearchFilter("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div className="customDropDown">
      <div
        key={title}
        className="py-1.5 cursor-pointer px-3 leading-6 items-center bg-[#F3F2F2] w-max flex  gap-2 rounded-lg border border-[#3A3A3A]"
        onClick={handleClick}
      >
        <img
          src={imagePath}
          className="h-[16px] font-normal"
          alt=""
          srcSet=""
        />
        <span className="font-medium ">{title}</span>

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
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        className="mt-0.5 custom !overflow-y-hidden h-full !overflow-x-hidden !w-full"
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
              inputProps={{ "aria-label": "search" }}
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                setSearchFilter(e.target.value);
                console.log(e.target.value);
              }}
            />
          </Search>
        </div>

        <div className="customScroll !pl-0 !py-0">
              {filteredOptions.map((val, ind) => (
                <MenuItem
                  key={ind}
                  className="!text-sm !font-medium !px-3 !py-0.5 "
                  onClick={() => {
                    handleCheckboxChange(val);
                  }}
                >
                  <div className="" onClick={(e) => e.stopPropagation()}>
                    <FormControlLabel
                      className="!pe-4 !me-0"
                      control={
                        <Checkbox
                          checked={(selectedOptions || []).includes(val)}
                          onChange={() => handleCheckboxChange(val)}
                          color="primary"
                          id={`Check-All${val}`}
                          className="!p-1.5 stretched-link"
                        />
                      }
                      label={val}
                      sx={{ "& .MuiTypography-root": { fontSize: "0.875rem" } }}
                    />
                  </div>
                </MenuItem>
              ))}
        </div>
      </Menu>
    </div>
  );
};

export default CustomDropDown;
