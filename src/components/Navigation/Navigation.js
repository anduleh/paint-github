// react
import React from "react";

// material ui
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import CardMedia from "@material-ui/core/CardMedia";

// imgs
import safariBall from "../../media/img/pokeball.png";

// redux
import { useSelector, useDispatch } from "react-redux";

// helpers
import { signIn } from "../../helpers/signIn.js";

// actions
import { updatePage } from "../../actions";

// firebase
import firebase from "../../firebase";

// imports
import Menu from "./Menu";
import { isMobile } from "react-device-detect";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#49896F",
    paddingTop: "2px",
    paddingBottom: "2px",
  },
  media: {
    paddingLeft: "10px",
    height: "auto",
    width: "50px",
    cursor: "pointer",
    "&:hover": { filter: "none" },
    filter: "drop-shadow(1px 1px 1px black)",
  },
  mobileMedia: {
    paddingLeft: "10px",
    height: "auto",
    width: "50px",
    "&:active": {
      marginLeft: "1.5px",
      marginTop: "1.5px",
      filter: "none",
    },
    filter: "drop-shadow(1px 1px 1px black)",
  },
  link: {
    margin: theme.spacing(1),
    color: "black",
    textDecoration: "none",
    cursor: "pointer",
    textTransform: "none",
    "&:hover": { color: "#e1e4e8", textDecoration: "none" },
    fontWeight: 600,
  },
  mobileLink: {
    margin: theme.spacing(1),
    color: "black",
    textDecoration: "none",
    textTransform: "none",
    cursor: "pointer",
    "&:hover": { textDecoration: "none" },
    fontWeight: 600,
  },
}));

const Appbar = () => {
  const dispatch = useDispatch();

  const switchPage = (page) => {
    dispatch(updatePage(page));
  };

  const classes = useStyles();

  const login = useSelector((state) => state.login);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar style={{ minHeight: "0px" }} disableGutters>
        <Link
          onClick={() => {
            switchPage("home");
          }}
        >
          <CardMedia
            className={isMobile ? classes.mobileMedia : classes.media}
            image={safariBall}
            component="img"
            alt="safari ball"
          />
        </Link>

        <section style={{ marginLeft: "auto" }}>
          <Link
            onClick={() => {
              switchPage("home");
            }}
            variant="button"
            color="textPrimary"
            className={isMobile ? classes.mobileLink : classes.link}
          >
            Paint
          </Link>
          <Link
            onClick={() => {
              switchPage("help");
            }}
            variant="button"
            color="textPrimary"
            className={isMobile ? classes.mobileLink : classes.link}
          >
            Help
          </Link>
        </section>
        {login ? (
          <div>
            <Menu
              style={{
                margin: "8px 8px",
              }}
              userPic={firebase.auth().currentUser.photoURL}
            />
          </div>
        ) : (
          <Button
            onClick={() => signIn(dispatch)}
            color="default"
            variant="outlined"
            style={{
              margin: "8px 8px",
              fontWeight: 600,
            }}
          >
            SIGN IN
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
