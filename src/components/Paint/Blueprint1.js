// React
import React from "react";

// material ui
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

// react tooltip
import ReactTooltip from "react-tooltip";
import { BrowserView } from "react-device-detect";

// components
import ColorButton from "./ColorButton";
import LevelButton from "./LevelButton";
import Submit from "./Submit";
import Username from "./Username";
import Calendar from "./Calendar.js";
import Message from "./Message";
import Reset from "./Reset";

// constants
import { COLORS, SUBSCRIPTION_LEVELS } from "../../constants.js";

const Blueprint1 = () => {
  return (
    <Grid item container spacing={1}>
      <Grid item container spacing={1}>
        <Grid item xs></Grid>
        <Grid item xs={8}>
          <Username />
        </Grid>
        <Grid item xs></Grid>
      </Grid>
      <Grid container item spacing={1}>
        <Grid
          container
          item
          xs
          direction="column"
          spacing={1}
          justify="center"
          alignItems="flex-end"
        >
          {SUBSCRIPTION_LEVELS.map((sub, index) => (
            <Grid key={index} item style={{ height: "20%" }}>
              <LevelButton
                style={{
                  height: "100%",
                }}
                level={sub.level}
              />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={8}>
          <Card
            raised
            style={{
              height: "100%",
              overflowX: "scroll",
              padding: "20px",
            }}
          >
            <Calendar />
            <BrowserView>
              <ReactTooltip delayShow={500} html clickable={true} />
            </BrowserView>
          </Card>
        </Grid>
        <Grid
          container
          item
          xs
          direction="column"
          spacing={1}
          justify="center"
          alignItems="flex-start"
        >
          {COLORS.map((color, index) => (
            <Grid key={index} item style={{ height: "20%" }}>
              <ColorButton
                variant="contained"
                style={{
                  height: "100%",
                  border: "2px solid black",
                }}
                color={color}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container item spacing={1}>
        <Grid item xs></Grid>
        <Grid item container xs={8} justify="center" alignItems="flex-start">
          <Grid item xs={1}>
            <Reset />
          </Grid>
          <Grid
            item
            container
            xs
            justify="flex-end"
            alignItems="flex-start"
            spacing={1}
            wrap="nowrap"
          >
            <Grid item style={{ marginTop: "3px" }}>
              <Message />
            </Grid>
            <Grid item>
              <Submit />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Grid>
  );
};

export default Blueprint1;
