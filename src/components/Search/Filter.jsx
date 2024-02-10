import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Switch,
} from "@mui/material";
import styled from "styled-components";
import ListAll from "../../images/newww/Vectorsort.png";
import Account from "../../images/newww/fi-rr-filter1.png";
import Law from "../../images/newww/fi-sr-globe3.png";
import Vectorgame from "../../images/tab-icon/Vectorgame.png";
import Office from "../../images/tab-icon/fi-rr-buildingoffice.png";
import { SwitchProps } from "@mui/material/Switch";
import { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import CustomDropDown from "./CustomDropDown";

const Filter = () => {
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const tab = [
    {
      tabName: "View All Filters",
      icon: Account,
    },
    {
      tabName: "Sort By",
      icon: ListAll,
    },
    {
      tabName: "Languages",
      icon: Law,
    },
    {
      tabName: "Country: South Africa",
      icon: Vectorgame,
    },
  ];
  const [menuAnchorEl, setMenuAnchorEl] = useState({});
  const [selectedViewAll, setSelectedViewAll] = useState([]);
  const [selectedSortBy, setSelectedSortBy] = useState([]);
  const [selecteLanguages, setselecteLanguages] = useState([]);

  const countryNames = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const LanguagesOptions = [
    "English US",
    "English UK",
    "English AU",
    "Korean",
    "Polish",
    "German",
    "French",
    "Spanish",
    "Italian",
    "Chinese",
    "Japanese",
    "Portuguese",
  ];
  const viewAllFilterOptions = [" Filter1", "Filter2", "Filter3"];
  const SortByOptions = ["Most Liked", "Most viewed"];

  return (
    <div>
      <div className="font-bold sm:text-2xl text-lg mb-3">
        Filter options for <span className="text-[#FFA500]">“All”</span>{" "}
        services
      </div>

      <div className="flex flex-wrap justify-between">
        <div className="overflow-x-auto flex scrollbar gap-3 text-nowrap 	">
          <CustomDropDown
            options={viewAllFilterOptions}
            selectedOptions={selectedViewAll}
            setSelectedOptions={setSelectedViewAll}
            title="View All Filters"
            imagePath={Account}
            // searchable={true}
          />

          <CustomDropDown
            // options={viewAllFilterOptions}
            options={SortByOptions}
            selectedOptions={selectedSortBy}
            setSelectedOptions={setSelectedSortBy}
            title="Sort By"
            imagePath={ListAll}
            // searchable={true}
          />

          <CustomDropDown
            // options={viewAllFilterOptions}
            options={countryNames }
            selectedOptions={selecteLanguages}
            setSelectedOptions={setselecteLanguages}
            title="Languages"
            imagePath={Law}
            // searchable={true}
          />
        </div>

        <FormGroup className="mt-2">
          <FormControlLabel
            control={
              <Switch
                checked={state.gilad}
                onChange={handleChange}
                name="gilad"
              />
            }
            label="Show listings with discounts"
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default Filter;
