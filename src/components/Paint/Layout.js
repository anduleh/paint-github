// React
import React from "react";

// material ui
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Fade from "@material-ui/core/Fade";

// imports
import Blueprint1 from "./Blueprint1";
import Blueprint2 from "./Blueprint2";

const Layout = () => {
  // switch layout
  const format = useMediaQuery("(min-width:960px)");

  return (
    <div>
      {format ? (
        <Fade in={true}>
          <Blueprint1 />
        </Fade>
      ) : (
        <Fade in={true} timeout={2000}>
          <Blueprint2 />
        </Fade>
      )}
    </div>
  );
};

export default Layout;
