import React from "react";
import CardMedia from "@material-ui/core/CardMedia";

import { BULBASAURS } from "../../constants.js";

import { useSelector } from "react-redux";

import { COLORS } from "../../constants.js";

const Bulbasaur = () => {
  const shade = useSelector((state) => state.shade);
  const bulbasaur = useSelector((state) => state.bulbasaur);

  return (
    <CardMedia
      style={{
        border: `7px solid ${COLORS[shade]}`,
        borderRadius: "50%",
        boxShadow: "0 0 0 5px black",
        height: "225px",
        width: "225px",
      }}
      image={BULBASAURS[bulbasaur]}
      component="img"
    />
  );
};

export default Bulbasaur;
