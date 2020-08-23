import React from "react";
import TextField from "@material-ui/core/TextField";
import { useSelector, useDispatch } from "react-redux";

// implement front-end email validation later
import * as EmailValidator from "email-validator";

// actions
import {
  updateEmailValue,
  updateEmailHelper,
  updateEmailError,
} from "../..//actions";

const Email = () => {
  // selector
  const email = useSelector((state) => state.email.value);
  const helper = useSelector((state) => state.email.helper);
  const error = useSelector((state) => state.email.error);

  // dispatch
  const dispatch = useDispatch();

  // edit the email helper function
  const editEmail = (e) => {
    let editedEmail = e.target.value;
    dispatch(updateEmailValue(e.target.value));
    if (EmailValidator.validate(editedEmail)) {
      // if email is valid, helper and error is false
      dispatch(updateEmailHelper(""));
      dispatch(updateEmailError(false));
    } else {
      // if email is invalid, show invalid helper and error is true
      dispatch(updateEmailHelper("This email is invalid."));
      dispatch(updateEmailError(true));
    }
  };

  return (
    <TextField
      autoFocus
      margin="dense"
      id="name"
      label="Email Address"
      value={email}
      type="email"
      onChange={editEmail}
      fullWidth
      helperText={helper}
      error={error}
    />
  );
};

export default Email;
