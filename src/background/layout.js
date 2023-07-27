import React from "react";

import "./layout.css";

import MobileDiv from "../mobile/mobileDiv.js";
import PageTitle from "../components/Title/pageTitle.js"

const layout = () => {
  return (
    <React.Fragment>
      <PageTitle></PageTitle>
      <div className="background">
        <MobileDiv></MobileDiv>
      </div>
      </React.Fragment>
  )
}

export default layout;