// React
import React from "react";

// material ui
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

// imports
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

const Blueprint2 = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Username />
      </Grid>

      <Grid item xs={12}>
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
        item
        container
        xs={12}
        spacing={1}
        justify="center"
        alignItems="center"
        style={{
          margin: "auto",
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >
        {SUBSCRIPTION_LEVELS.map((sub, index) => (
          <Grid key={index} item style={{ width: "20%" }}>
            <LevelButton variant="contained" level={sub.level} />
          </Grid>
        ))}
      </Grid>

      <Grid
        item
        container
        xs={12}
        justify="center"
        spacing={1}
        alignItems="center"
        style={{
          margin: "auto",
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >
        {COLORS.map((color, index) => (
          <Grid key={index} item style={{ width: "20%" }}>
            <ColorButton
              variant="contained"
              style={{
                width: "100%",
                minWidth: "0px",
                overflow: "hidden",
                height: "40px",
                border: "2px solid black",
              }}
              color={color}
              index={index}
            />
          </Grid>
        ))}
      </Grid>

      <Grid
        item
        container
        xs={12}
        justify="center"
        alignItems="flex-start"
        style={{ margin: "auto", padding: "0px" }}
      >
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
          style={{
            margin: "auto",
            padding: "0px",
          }}
        >
          <Grid item>
            <Message />
          </Grid>
          <Grid item style={{ paddingTop: "0px" }}>
            <Submit />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Blueprint2;
