import React from "react";
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from "@material-ui/icons/Refresh";

// redux
import { useSelector, useDispatch } from "react-redux";

// actions
import { updateContributions, updateBulbasaur } from "../..//actions";

const Reset = () => {
  const dispatch = useDispatch();

  const contributions = useSelector((state) => state.contributions);
  const bulbasaur = useSelector((state) => state.bulbasaur);

  const reset = () => {
    if (bulbasaur) {
      dispatch(updateBulbasaur(0));
    }
    let clearedContributions = contributions.map((el) => {
      return { ...el, newIntensity: el.intensity };
    });
    dispatch(updateContributions(clearedContributions));
  };

  return (
    <IconButton onClick={reset} size="small">
      <RefreshIcon />
    </IconButton>
  );
};

export default Reset;
