// react
import React from "react";

// material ui
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

// constants
import { CARDS } from "../../constants.js";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "40px 20px 40px 20px",
    border: `1px solid ${theme.palette.divider}`,
  },
  cardGrid: {
    paddingTop: "20px",
  },

  cardContent: {
    flexGrow: 1,
  },
}));

const Inspiration = (props) => {
  const classes = useStyles();
  return (
    <Box id={props.id} className={classes.container}>
      <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
        Inspiration
      </Typography>
      <Typography align="center" gutterBottom>
        Is it about how good you are? Or is it about how good people
        <i> think</i> you are?
      </Typography>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4} alignItems="stretch">
          {CARDS.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Link
                href={card.url}
                target="_blank"
                rel="noopener"
                underline="none"
              >
                <CardActionArea style={{ height: "100%" }}>
                  <Card
                    style={{
                      height: "100%",
                    }}
                    raised
                  >
                    <CardMedia
                      image={card.image}
                      component="img"
                      alt={card.image}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography align="center" variant="h5" component="h2">
                        {card.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </CardActionArea>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Inspiration;
