import React from "react";

import "./layout.css";

import MobileDiv from "../components/InformationDiv/informationDiv.js";
import PageTitle from "../components/Title/pageTitle.js";
import SearchBar from "../components/SearchBar/searchBar.js";

const layout = () => {
  return (
    <React.Fragment>
      <PageTitle></PageTitle>
      <div className="background">
        <SearchBar></SearchBar>
        <MobileDiv></MobileDiv>
      </div>
      </React.Fragment>
  )
}

export default layout;