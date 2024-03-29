import React, { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

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
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color:'#FFA500'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
  padding: theme.spacing(1, 1, 1, 0),
    
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "60%",
    borderRadius:'50px',
    paddingTop:'12px',
    paddingBottom:'12px',

      "&:focus": {
        width: "100%",
        borderColor:"#FFA500"
      },
    },
    border: "1px solid #DDDCDC",
    borderRadius:"20px"
  },
}));

const SearchLog = ({setSearchFilter}) => {

    const handleSearch = (e) => {
      setSearchFilter(e.target.value);
    };

  return (
    <div className=" mb-4 ">
      <Search className="!me-4">
        <SearchIconWrapper >
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          id="Search Name"
          inputProps={{ "aria-label": "search",}}
          onChange={handleSearch}
        />
      </Search>
     </div>
  );
};

export default SearchLog;
