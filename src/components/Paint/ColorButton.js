import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

// actions
import { updateShade } from "../..//actions";

// constants
import { COLORS } from "../../constants.js";

const ColorButton = (props) => {
  const shade = useSelector((state) => state.shade);
  const dispatch = useDispatch();

  return (
    <Button
      variant="contained"
      style={{ ...props.style, backgroundColor: props.color }}
      onClick={() => {
        if (COLORS[shade] !== props.color) {
          dispatch(updateShade(props.index));
        }
      }}
    ></Button>
  );
};

export default ColorButton;
