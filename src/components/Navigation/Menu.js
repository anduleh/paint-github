// react
import React, { useState, useRef } from "react";

// material ui
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Avatar from "@material-ui/core/Avatar";

// imports
import { signOut } from "../../helpers/signOut.js";

// redux
import { useDispatch } from "react-redux";

const Menu = (props) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const sendEmail = () => {
    var email = "support@paintgithub.com";
    var subject = "Paint GitHub Feedback";
    document.location = "mailto:" + email + "?subject=" + subject;
    setOpen(false);
  };

  const dispatch = useDispatch();

  return (
    <div>
      <Button
        ref={anchorRef}
        onClick={handleToggle}
        disableFocusRipple={true}
        disableRipple={true}
        style={{
          backgroundColor: "transparent",
          borderRadius: "50%",
        }}
      >
        <Avatar
          src={props.userPic}
          style={{
            border: "1px solid black",
          }}
        />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        placement={"bottom-end"}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  <MenuItem onClick={sendEmail}>Feedback</MenuItem>
                  <MenuItem
                    style={{ color: "red" }}
                    onClick={() => signOut(dispatch)}
                  >
                    Sign out
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default Menu;
