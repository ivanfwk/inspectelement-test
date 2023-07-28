import React from "react";

import './App.css';
import Layout from "./background/layout.js";
import PageTitle from "./components/Title/pageTitle.js";

function App() {
  return (
    <React.Fragment>
      <PageTitle></PageTitle>
      <Layout></Layout>
    </React.Fragment>
  );
}

export default App;
