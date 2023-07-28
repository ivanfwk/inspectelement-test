import React from "react";

import "./layout.css";

import MobileDiv from "../components/InformationDiv/informationDiv.js";
import SearchBar from "../components/SearchBar/searchBar.js";

const layout = () => {
  return (
    <div className="background">
      <SearchBar></SearchBar>
      <MobileDiv></MobileDiv>
    </div>
  )
}

export default layout;