// react
import React from "react";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import HelpIcon from "@material-ui/icons/Help";

// constants
import { SUBSCRIPTION_LEVELS, NOSUB } from "../../constants.js";

// imports
import ReactTooltip from "react-tooltip";
import { isMobile } from "react-device-detect";

// redux
import { useSelector, useDispatch } from "react-redux";

// helpers
import updateSubscriptionLevel from "../../helpers/updateSubscriptionLevel.js";

// actions
import {
  updateSubscriptionLevel as updateSubscriptionLevelAction,
  updateSubscriptionHover,
} from "../..//actions";

// firebase
import firebase from "../..//firebase";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#30a14e",
    padding: "40px 20px 40px 20px",
    border: `1px solid ${theme.palette.divider}`,
    margin: "auto",
  },
  buttons: {
    margin: theme.spacing(1),
  },
  caption: {
    fontStyle: "italic",
    padding: "10px",
    height: "auto",
  },
}));

const Subscribe = () => {
  // styling
  const classes = useStyles();

  // selectors
  const login = useSelector((state) => state.login);
  const subLevel = useSelector((state) => state.subscription.level);
  const hoverSubLevel = useSelector((state) => state.subscription.hover);

  // loading is a null subLevel
  const loading = subLevel === null;

  // dispatch
  const dispatch = useDispatch();

  // level change helper function
  const levelChange = (level) => {
    var user = firebase.auth().currentUser;

    if (user) {
      if (level !== subLevel) {
        dispatch(updateSubscriptionLevelAction(level));
        updateSubscriptionLevel(user.uid, level);
      } else {
        dispatch(updateSubscriptionLevelAction(""));
        updateSubscriptionLevel(user.uid, "");
      }
    }
  };

  // valid
  let validSubLevel = [
    ...SUBSCRIPTION_LEVELS.map((item) => item.level),
    "",
  ].includes(subLevel);

  // hover change helper function
  const hoverChange = (level) => {
    dispatch(updateSubscriptionHover(level));
  };

  return (
    <Box id="subscribe" className={classes.container}>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12}>
          <Typography
            align="center"
            variant="h2"
            className={classes.title}
            style={{ fontWeight: 600 }}
          >
            Subscribe
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            textAlign: "center",
          }}
        >
          <Typography component="span">
            A commit a day, keeps the unemployment away!
          </Typography>
          <HelpIcon
            style={{
              display: "inline-block",
              marginBottom: "-2.5px",
              marginLeft: "3px",
              fontSize: "1rem",
              color: "rgb(0,0,0,0.6)",
            }}
            data-tip="Automatically paints your GitHub contribution graph everyday by making daily commits on your behalf 🎨"
          />
          <ReactTooltip />
        </Grid>
        <Grid container item xs={12} direction="row" justify="center">
          <Grid item style={{ marginTop: "10px", marginBottom: "10px" }}>
            <Card
              raised
              style={{
                height: "100%",
                position: "relative",
                padding: "10px",
              }}
            >
              <CardMedia
                image={NOSUB}
                component="img"
                style={
                  !login || loading || (!validSubLevel && hoverSubLevel === "")
                    ? {}
                    : isMobile && subLevel === ""
                    ? {}
                    : subLevel === "" && hoverSubLevel === ""
                    ? {}
                    : {
                        zIndex: "-1",
                        position: "absolute",
                      }
                }
              />
              {SUBSCRIPTION_LEVELS.map((subscription, index) => {
                return (
                  <CardMedia
                    image={subscription.image}
                    key={index}
                    component="img"
                    style={
                      isMobile && login && !loading
                        ? subLevel === subscription.level
                          ? {}
                          : {
                              zIndex: "-1",
                              position: "absolute",
                            }
                        : (hoverSubLevel === subscription.level &&
                            subLevel !== subscription.level &&
                            login &&
                            !loading) ||
                          (hoverSubLevel === "" &&
                            subLevel === subscription.level &&
                            login &&
                            !loading) ||
                          (hoverSubLevel === subscription.level &&
                            subLevel === subscription.level &&
                            login &&
                            !loading)
                        ? {}
                        : {
                            zIndex: "-1",
                            position: "absolute",
                          }
                    }
                  />
                );
              })}
            </Card>
          </Grid>
        </Grid>
        <Grid container item xs={12} justify="center" alignItems="flex-end">
          {SUBSCRIPTION_LEVELS.map((subscription, index) => (
            <Button
              key={index}
              disabled={loading || !login}
              className={classes.buttons}
              value={subscription.level}
              onClick={() => levelChange(subscription.level)}
              onMouseOver={() => hoverChange(subscription.level)}
              onMouseLeave={() => hoverChange("")}
              variant="contained"
              style={
                !loading && login
                  ? subLevel === subscription.level
                    ? {
                        border: "1px solid white",
                        color: "white",
                        backgroundColor: "#216e39",
                      }
                    : { border: "1px solid black" }
                  : {}
              }
            >
              {subscription.level}
            </Button>
          ))}
        </Grid>
        <Grid
          container
          item
          xs={12}
          style={{ float: "bottom" }}
          justify="center"
          alignItems="flex-end"
        >
          {!loading &&
          login &&
          SUBSCRIPTION_LEVELS.map((item) => item.level).includes(subLevel) ? (
            <Typography
              variant="caption"
              align="center"
              className={classes.caption}
            >
              "This will ensure your GitHub contribution graph has a{" "}
              <b>
                {SUBSCRIPTION_LEVELS.find((x) => x.level === subLevel).text}
              </b>{" "}
              spread"
            </Typography>
          ) : (
            <Typography
              variant="caption"
              align="center"
              className={classes.caption}
            >
              "You are not subscribed to Paint GitHub"
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Subscribe;
