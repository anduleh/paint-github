import React from "react";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "black",
    textDecoration: "none",
    cursor: "pointer",
    textTransform: "none",
    "&:hover": {
      color: "#30A14E",
      textDecoration: "none",
    },
    fontSize: 20,
  },
}));

const Username = () => {
  //styles
  const classes = useStyles();

  // selectors
  const username = useSelector((state) => state.username);

  return (
    <Typography align="left">
      <Link
        href={`https://github.com/${username}`}
        underline="none"
        target="_blank"
        rel="noopener"
        color="textPrimary"
        className={classes.link}
      >
        <b>{username ? "@" + username : ""}</b>
      </Link>
    </Typography>
  );
};

export default Username;
