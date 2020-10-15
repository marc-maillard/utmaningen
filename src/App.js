import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Utmaningentheme from "./components/utmaningenTheme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Box } from "@material-ui/core";
import NavBar from "./components/nav_bar";
import Routes from "./components/Routes";
import { useTheme } from "@material-ui/core/styles";

function App() {
  const theme = useTheme();
  return (
    <Router>
      <MuiThemeProvider theme={Utmaningentheme}>
        <CssBaseline />
        <Box>
          <NavBar theme={theme} />
          <Routes />
        </Box>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
