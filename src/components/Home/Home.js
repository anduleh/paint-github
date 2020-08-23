// react imports
import React from "react";

// home components
import Paint from "../Paint/Paint.js";
import Subscribe from "../Subscribe/Subscribe.js";
import Inspiration from "../Inspiration/Inspiration.js";

const Home = () => {
  return (
    <div>
      <Paint />
      <Subscribe />
      <Inspiration />
    </div>
  );
};

export default React.memo(Home);
