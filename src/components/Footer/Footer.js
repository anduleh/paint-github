import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import CardMedia from "@material-ui/core/CardMedia";

import { PROFILE } from "../..//constants.js";

const useStyles = makeStyles((theme) => ({
  container: {
    borderTop: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#49896F",
    padding: "40px 30px 40px 30px",
  },
  media: {
    borderRadius: "50%",
    height: "auto",
    width: "135px",
    border: "2px solid black",
  },
  buttons: {
    margin: theme.spacing(1),
    "@media (max-width:350px)": {
      fontSize: 10,
    },
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <Box id={props.id} className={classes.container}>
      <Container>
        <Grid container spacing={3} direction="row">
          <Grid item container md={2} direction="column" alignItems="center">
            <Grid item xs>
              <CardMedia
                className={classes.media}
                image={PROFILE}
                alt="profile"
                component="img"
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            md={10}
            spacing={2}
            direction="column"
            alignItems="center"
          >
            <Grid item xs>
              <Typography align="center" display="block">
                My passion is to bridge the gap between people and technology. I
                am a Certified Solutions Architect for Amazon Web Services,
                Microsoft Azure, and Google Cloud Platform.{" "}
                <Link
                  href="https://www.google.com/search?q=cloud+computing"
                  underline="none"
                  target="_blank"
                  rel="noopener"
                >
                  <span role="img" aria-label="cloud">
                    ☁️
                  </span>
                </Link>
              </Typography>
            </Grid>
            <Grid item xs>
              <Link
                href="https://github.com/anduleh"
                underline="none"
                target="_blank"
                rel="noopener"
              >
                <Button
                  className={classes.buttons}
                  variant="contained"
                  startIcon={<GitHubIcon />}
                >
                  GitHub
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/anduleh"
                underline="none"
                target="_blank"
                rel="noopener"
              >
                <Button
                  className={classes.buttons}
                  variant="contained"
                  startIcon={<LinkedInIcon />}
                >
                  LinkedIn
                </Button>
              </Link>
            </Grid>
            <Grid item xs>
              <Typography align="center" variant="caption" display="block">
                All logos, product, characters, avatars, and company names are
                trademarks or registered trademarks of their respective holders.
                Use of them does not imply any affiliation with or endorsement
                by them. This site and the products and services offered on this
                site are not associated, affiliated, endorsed, or sponsored by
                any companies listed on this page nor have they been reviewed
                tested or certified by any company listed on this page.
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography align="center" display="block">
                © 2021 Paint GitHub. All Rights Reserved.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
