// react
import React from "react";

// material ui
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

// redux
import { useSelector, useDispatch } from "react-redux";
import { toggleSnackBar } from "../..//actions";

const SnackbarComponent = () => {
  const snackbar = useSelector((state) => state.snackbar);
  const dispatch = useDispatch();

  const closeSnackbar = (event, reason) => {
    dispatch(toggleSnackBar(false));
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={snackbar.show}
      autoHideDuration={6000}
      onClose={closeSnackbar}
    >
      <MuiAlert elevation={6} variant="filled" severity="error">
        {snackbar.message}
      </MuiAlert>
    </Snackbar>
  );
};

export default SnackbarComponent;
