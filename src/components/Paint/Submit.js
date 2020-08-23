import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";

// actions
import { toggleSame, toggleConfirmation } from "../..//actions";

// helpers
import { arraysEqual } from "../..//helpers/arraysEqual.js";

const Submit = () => {
  // dispatch
  const dispatch = useDispatch();

  // selectors
  let submit = useSelector((state) => state.submit);
  let contributions = useSelector((state) => state.contributions);

  const openConfirmation = () => {
    let beforeIntensity = contributions.map(function (contribution) {
      return contribution.intensity;
    });
    let afterIntensity = contributions.map(function (contribution) {
      return contribution.newIntensity;
    });

    arraysEqual(beforeIntensity, afterIntensity)
      ? dispatch(toggleSame(true))
      : dispatch(toggleSame(false));

    dispatch(toggleConfirmation(true));
  };

  const submitSwitch = (type) => {
    switch (type) {
      case "success":
        return <DoneIcon style={{ fontSize: "26px", color: "#216e39" }} />;
      case "error":
        return <ClearIcon style={{ fontSize: "26px", color: "red" }} />;
      case "waiting":
        return (
          <CircularProgress
            style={{ color: "#216e39", marginRight: "5px" }}
            size={26}
          />
        );
      default:
        return (
          <Button
            variant="contained"
            disabled={type === "disabled" ? true : false}
            style={{ backgroundColor: "#d40034", color: "white" }}
            onClick={openConfirmation}
          >
            SUBMIT
          </Button>
        );
    }
  };

  return <div>{submitSwitch(submit)}</div>;
};

export default Submit;
