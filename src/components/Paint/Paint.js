// react
import React from "react";

// material ui
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Collapse from "@material-ui/core/Collapse";

// imports
import GitHubButton from "react-github-login-button";
import Layout from "./Layout.js";
import Bulbasaur from "./Bulbasaur.js";

// helpers
import { signIn } from "../../helpers/signIn.js";

// redux
import { useSelector, useDispatch } from "react-redux";

const Paint = () => {
  // selectors
  const login = useSelector((state) => state.login);
  const username = useSelector((state) => state.username);
  const contributions = useSelector((state) => state.contributions);

  // dispatch
  const dispatch = useDispatch();

  // loading
  const loading = !username || !contributions;

  return (
    <Box
      id="paint"
      style={{
        border: `1px solid rgba(0, 0, 0, 0.12)`,
        backgroundColor: "#9be9a8",
        padding: "40px 20px 40px 20px",
      }}
    >
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <Typography
            align="center"
            component="h1"
            variant="h2"
            color="textPrimary"
            style={{ fontWeight: 600 }}
          >
            Paint GitHub
          </Typography>
          <Typography align="center" gutterBottom>
            The most convenient way to paint your GitHub contribution graph!
          </Typography>
        </Grid>
        <Grid item>
          <Bulbasaur />
        </Grid>

        <Grid item style={{ width: "100%", overflow: "auto" }}>
          <Collapse in={!loading} collapsedHeight="70px">
            {login ? (
              loading ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <CircularProgress size={50} style={{ color: "green" }} />
                </div>
              ) : (
                <Layout />
              )
            ) : (
              <GitHubButton
                onClick={() => signIn(dispatch)}
                type="dark"
                style={{ margin: "auto", marginTop: "15px" }}
              />
            )}
          </Collapse>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Paint;
