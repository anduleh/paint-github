// react
import React from "react";

// material ui
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Card from "@material-ui/core/Card";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import HelpIcon from "@material-ui/icons/Help";

// color
import { withStyles } from "@material-ui/core/styles";

// imports
import Calendar from "../Paint/Calendar.js";
import Email from "../Paint/Email";
import ReactTooltip from "react-tooltip";

// helpers
import submitPaintJob from "../../helpers/submitPaintJob.js";

// actions
import {
  toggleConfirmation,
  updateSubmit,
  updateMessage,
  toggleCheck,
} from "../..//actions";

// redux
import { useSelector, useDispatch } from "react-redux";

const GreenCheckbox = withStyles({
  root: {
    color: "#216e39",
    "&$checked": {
      color: "#30a14e",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const Confirmation = () => {
  // selectors
  let email = useSelector((state) => state.email.value);
  const error = useSelector((state) => state.email.error);
  const same = useSelector((state) => state.same);
  const confirmation = useSelector((state) => state.confirmation);
  const contributions = useSelector((state) => state.contributions);
  const check = useSelector((state) => state.check);

  // dispatch
  const dispatch = useDispatch();

  const confirm = async () => {
    // close confirmation
    dispatch(toggleConfirmation(false));

    // start submit on waiting
    dispatch(updateSubmit("waiting"));

    // payload: emailRecipient + contributions
    let payload = {
      email,
      contributions,
      check,
    };

    try {
      // submit the paint job!
      let res = await submitPaintJob(payload);
      // update message text
      dispatch(updateMessage(res.message));
      // update submit button to success
      dispatch(updateSubmit("success"));
    } catch (err) {
      // if error, show the error message
      dispatch(updateMessage(err.message));
      // update submit button to error
      dispatch(updateSubmit("error"));
    }
  };

  // when the modal closes, save the new email into the redux store
  const handleClose = () => {
    dispatch(toggleConfirmation(false));
  };

  const handleCheck = (event) => {
    if (event.target.checked === true) {
      dispatch(toggleCheck(true));
    } else {
      dispatch(toggleCheck(false));
    }
  };

  return (
    <Dialog
      open={confirmation}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Are you sure?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          When the paint job completes, an email will be sent to the specified
          email address.
        </DialogContentText>
        <Card
          raised
          style={{
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <b>Before:</b>
          <Calendar before display />
        </Card>

        <Card
          raised
          style={{
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <b>After:</b>
          <Calendar display />
        </Card>

        <Email />
      </DialogContent>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <FormControlLabel
            style={{
              paddingLeft: "22px",
              marginBottom: "5px",
              marginRight: "3px",
            }}
            control={
              <GreenCheckbox
                onChange={handleCheck}
                name="checkedG"
                checked={check}
              />
            }
            label="Private repo?"
          />
          <HelpIcon
            style={{
              display: "inline-block",
              marginBottom: "-2.5px",
              marginLeft: "4px",
              fontSize: "1rem",
              color: "rgb(0,0,0,0.6)",
            }}
            data-tip="If a paint repo does not already exist, create a private repo instead of a public one 🔒"
          />
          <ReactTooltip place="bottom" />
        </Grid>
        <Grid item>
          <DialogActions>
            <Button disabled={same || error} onClick={confirm}>
              Yes
            </Button>
            <Button onClick={handleClose}>No</Button>
          </DialogActions>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default Confirmation;
