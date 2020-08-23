// react imports
import React from "react";

// home components
import Home from "../Home/Home.js";

// about component
import Help from "../Help/Help.js";

// redux
import { useSelector } from "react-redux";

// imports
import Confirmation from "./Confirmation.js";
import Snackbar from "./Snackbar.js";

const Page = () => {
  const page = useSelector((state) => state.page);

  return (
    <div>
      <div style={{ display: page === "home" ? "block" : "none" }}>
        <Home />
      </div>
      <div style={{ display: page === "help" ? "block" : "none" }}>
        <Help />
      </div>
      <Snackbar />
      <Confirmation />
    </div>
  );
};

export default Page;
