import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#9be9a8",
    padding: "20px 0px 20px 0px",
    border: `1px solid ${theme.palette.divider}`,
  },
  link: {
    color: "rgba(0, 0, 0, 0.87)",
    textDecoration: "none",
    cursor: "pointer",
    textTransform: "none",
    fontWeight: 400,
    "&:hover": { color: "#30A14E" },
  },
}));

const Help = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Container maxWidth="lg">
        <Typography variant="h2" color="textPrimary">
          About
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Paint GitHub is the most convenient way to paint your GitHub
          Contribution graph
        </Typography>
        <Divider style={{ marginBottom: "10px" }} />
        <Typography variant="body2" gutterBottom>
          In order to use Paint GitHub, you must sign in and allow Paint GitHub
          to access your repositories. Paint GitHub will persist your access
          token in order to make commits on your behalf. If there are any
          security concerns, please explicitly remove Paint GitHub from your{" "}
          <Link
            href="https://github.com/settings/applications"
            underline="none"
            target="_blank"
            rel="noopener"
            variant="button"
            color="textPrimary"
            className={classes.link}
            aria-label="GitHub"
          >
            Authorized OAuth Apps
          </Link>{" "}
          after painting your contribution graph.
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          style={{ marginTop: "20px", fontWeight: "bold" }}
        >
          Instructions:
        </Typography>
        <Typography variant="h6" gutterBottom>
          <b>Paint</b>: creates a private repository to paint your contribution
          graph
        </Typography>
        <ListItemText style={{ paddingLeft: "24px" }}>
          <Typography variant="body2" gutterBottom>
            1. Choose any color{" "}
            <span role="img" aria-label="palette">
              🎨
            </span>
          </Typography>
        </ListItemText>
        <ListItemText style={{ paddingLeft: "24px" }}>
          <Typography variant="body2" gutterBottom>
            2. Paint your contribution graph{" "}
            <span role="img" aria-label="paintbrush">
              🖌️
            </span>
          </Typography>
        </ListItemText>
        <ListItemText style={{ paddingLeft: "24px" }}>
          <Typography variant="body2" gutterBottom>
            3. Submit the paint job{" "}
            <span role="img" aria-label="lock">
              🔒
            </span>
          </Typography>
        </ListItemText>
        <ListItemText style={{ paddingLeft: "24px" }}>
          <Typography variant="body2" gutterBottom>
            4. Receive an email when the paint job is complete{" "}
            <span role="img" aria-label="mail">
              ✉️
            </span>
          </Typography>
        </ListItemText>
        <Typography variant="h6" gutterBottom>
          <b>Subscribe</b>: automatically paints your contribution graph
          everyday by making daily commits on your behalf
        </Typography>
        <ListItemText style={{ paddingLeft: "24px" }}>
          <Typography variant="body2" gutterBottom>
            1. Choose a subscription level. The higher the level, the denser we
            will aim to paint your contribution graph as the days pass.{" "}
            <span role="img" aria-label="chart">
              📈
            </span>
          </Typography>
        </ListItemText>
        <ListItemText style={{ paddingLeft: "24px" }}>
          <Typography variant="body2" gutterBottom>
            2. Within 24 hours you should see a new shade of green on the
            present day. If not, it means no commits were made today based on
            your chosen subscription level density.{" "}
            <span role="img" aria-label="clock">
              🕒
            </span>
          </Typography>
        </ListItemText>
        <ListItemText style={{ paddingLeft: "24px" }}>
          <Typography variant="body2" gutterBottom>
            3. Note: this does not paint your entire contribution graph
            outright. Subscribing will simply make daily commits on your behalf
            starting from the day of subscription.{" "}
            <span role="img" aria-label="calendar">
              📅
            </span>
          </Typography>
        </ListItemText>
        <Typography
          variant="h5"
          gutterBottom
          style={{ marginTop: "20px", fontWeight: "bold" }}
        >
          Disclaimer:
        </Typography>
        <Typography variant="body2" gutterBottom>
          Paint GitHub is provided as is and makes no promises or guarantees
          about this service. Paint GitHub is not affliated with GitHub in any
          way. Paint GitHub is not liable for any damages or losses arising from
          your use or inability to use the service.
        </Typography>
        <Typography
          variant="h2"
          align="left"
          color="textPrimary"
          style={{ marginTop: "40px", fontWeight: 600 }}
        >
          FAQ
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Divider style={{ marginBottom: "10px" }} />
        <Typography
          variant="body2"
          gutterBottom
          style={{ fontWeight: "bold", marginTop: "15px" }}
        >
          1. After submitting my paint job, why does my resulting GitHub
          contribution graph not look exactly like how I painted it?
        </Typography>
        <Typography variant="body2" gutterBottom>
          GitHub occasionally changes their contribution graph color algorithm
          and does not make it public. Therefore, our model can only make a best
          guess on how to color in your contribution graph. For example,
          GitHub's algorithm disregards "outliers" when calculating the
          different shades of green. We have no idea what constituents an
          outlier in their algorithm. Is it the Z-score? Is it 1.5xIQR? Is it
          some form of clustering? Or maybe some combination of all three? We
          have tried to reverse engineer their color algorithm for days to no
          avail. Therefore, our model can only make a best guess on how to color
          in your contribution graph. We do not guarentee that the submitted
          paint job will reflect your contribution graph perfectly, but we will
          try our best.
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          style={{ fontWeight: "bold", marginTop: "20px" }}
        >
          2. Why did Paint GitHub explicitly paint today’s date when I did not
          paint today’s date?
        </Typography>
        <Typography variant="body2" gutterBottom>
          We need to create an explicit repository to carry the commits that
          “paint” your contribution graph. It is only possible to create a
          repository on the present day. Creating this repository includes 2
          commits: the repository itself, and a the README file to auto
          initialize the branch. These two commits contribute the paint on the
          present day.
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          style={{ fontWeight: "bold", marginTop: "20px" }}
        >
          3. How long does it usually take to paint a contribution graph?
        </Typography>
        <Typography variant="body2" gutterBottom>
          It depends on the max number of commits made on single day within the
          last year. Our algorithm spreads out your paint job’s commits in
          quartiles – based on the four shades of green. If the max number of
          commits made on single day within the last year is a high number, the
          paint job will take longer because more commits are needed to
          progressively reach each darker shade of green.
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          style={{ fontWeight: "bold", marginTop: "20px" }}
        >
          4. I don’t like the finished paint job on my GitHub profile. How can I
          erase the paint?
        </Typography>
        <Typography variant="body2" gutterBottom>
          Delete the repository holding all the commits for your paint jobs. In
          general, Paint GitHub will only generate one repository to hold all
          your paint jobs. If you want Paint GitHub to generate a new repository
          for future paint jobs, simply rename the original repository to
          something else.
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          style={{ fontWeight: "bold", marginTop: "20px" }}
        >
          5. I cannot create a paint job. The paint job keeps erroring out. What
          should I do?
        </Typography>
        <Typography variant="body2" gutterBottom>
          Try signing in and out again. Usually it is because your access token
          has expired and Paint GitHub needs a new one from GitHub to paint on
          your behalf. On very rare occasions, there will be naming conflicts
          when creating repo or paint jobs. Signing out and in usually solves
          most of these issues. Else, feel free to send us feedback.
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          style={{ fontWeight: "bold", marginTop: "20px" }}
        >
          6. What kind of commits are you making to the generated repository to
          paint my contribution graph?
        </Typography>
        <Typography variant="body2" gutterBottom>
          Paint GitHub makes empty commits into the generated repository for any
          given paint job. No files other than the initial README.md are
          created. Yes, there is an --allow-empty flag for the git commit
          command!
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          style={{ fontWeight: "bold", marginTop: "20px" }}
        >
          7. Why can't I paint a square with a lighter shade of green?
        </Typography>
        <Typography variant="body2" gutterBottom>
          The darker a square, the more commits are made on that given day.
          Forcing a lighter shade of green implies removing commits from that
          given day. If those commits were a part of an important separate
          repository, it would be disastrous to remove those commits and have
          you lose your work. Therefore, Paint GitHub can only paint over your
          contribution graph and not strip anything from it.
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          style={{ fontWeight: "bold", marginTop: "20px" }}
        >
          8. Why Bulbasaur?
        </Typography>
        <Typography variant="body2" gutterBottom>
          "I'll take a cute green-colored character with a debatable Octocat
          silohette for $400, Alex".
        </Typography>
      </Container>
    </Box>
  );
};

export default Help;
