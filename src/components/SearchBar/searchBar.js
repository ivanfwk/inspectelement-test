import React from "react";

import "./searchBar.css";

const searchBar = () => {
  return (
    <React.Fragment>
      <input type="text" class="search-bar" placeholder="Search..." list="locations" />
      <datalist id="locations">
        <option value="Hong Kong" />
        <option value="Kuala Lumpur" />
        <option value="London" />
        <option value="New York" />
      </datalist>
    </React.Fragment>
  )
}

export default searchBar;