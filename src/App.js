import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/AppBar";
import SingleItem from "./components/SingleItem";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { purple, green } from "@material-ui/core/colors";

import { Paper } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App() {
  const [switched, setSwitch] = useState(false);
  const isTrue = false;
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: green[500],
      },
      secondary: {
        main: green[800],
      },
      type: switched ? "dark" : "light",
    },
  });

  const [search, setSearch] = useState("");

  return (
 
      <Router>
        <ThemeProvider theme={darkTheme}>
          <Paper style={{ minHeight: "100vh" }}>
            <div className="App" style={{ minHeight: "100vh" }}>
              <Grid container direction="column">
                <Grid item xs={12}>
                  <NavBar
                    switched={switched}
                    setSwitch={() => setSwitch(!switched)}
                    setSearch={(e) => setSearch(e.target.value)}
                  />
                </Grid>
                <Grid item container xs={12}>
                  <Switch>
                    <Route
                      exact
                      path="/"
                      render={() => (
                        <React.Fragment>
                          <Home search={search} />
                        </React.Fragment>
                      )}
                    />
                    <Route exact path="/items/:itemId" component={SingleItem} />
                    <Redirect to="/" />
                  </Switch>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </ThemeProvider>
      </Router>

  );
}

export default App;
