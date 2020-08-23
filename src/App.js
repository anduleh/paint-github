// test css
import "./App.css";

// react imports
import React from "react";

// material ui imports
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

//firebase
import firebase, { db } from "./firebase";

// helpers
import adjustContributions from "./helpers/adjustContributions.js";
import getGithubData from "./helpers/getGithubData.js";
import setData from "./helpers/setData.js";
import clearData from "./helpers/clearData.js";

//redux
import { useDispatch } from "react-redux";

// actions
import { toggleLogin, updateSnackbarMessage, toggleSnackBar } from "./actions";

// global components
import Navigation from "./components/Navigation/Navigation.js";
import Footer from "./components/Footer/Footer.js";
// page components
import Page from "./components/Page/Page.js";

// mui theme
const theme = createMuiTheme({
  palette: {
    background: {
      default: "#9be9a8",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h2: {
      fontWeight: 600,
    },
  },
});

function App() {
  const dispatch = useDispatch();
  clearData(dispatch);
  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      // set global login to true as well
      dispatch(toggleLogin(true));

      // if the user doc does not exist, wait for it using a snapshot
      var unsubscribe = db
        .collection("users")
        .doc(user.uid)
        .onSnapshot(
          async (snapshot) => {
            if (snapshot.exists) {
              try {
                let data = snapshot.data();

                // get user doc with access_token and subscription_level
                let accessToken = data.access_token;
                let subscriptionLevel = data.subscription_level;
                subscriptionLevel =
                  subscriptionLevel === undefined ? "" : subscriptionLevel;

                // get username, email, and contributions
                let githubData = await getGithubData(accessToken);

                // remember to adjust contributions to client timezone
                githubData.contributions = adjustContributions(
                  githubData.contributions
                );

                // consoldiate the data...
                let userData = { ...githubData, subscriptionLevel };

                // update username, email, adjusted contributions, and subscription level
                setData(dispatch, userData);

                // unsubscribe, clear timeout if token resolves succesfully!
                unsubscribe();
              } catch (err) {
                // global var to check if someone used sign in button
                if (!window.from_sign_in) {
                  dispatch(
                    updateSnackbarMessage(
                      "Error retrieving user data. Please log out and try again."
                    )
                  );
                  dispatch(toggleSnackBar(true));
                  unsubscribe();
                }
              }
            }
          },
          (err) => {
            console.log("You need to be signed in.");
            unsubscribe();
            clearData(dispatch);
          }
        );
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navigation />
        <Page />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
