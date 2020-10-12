import { grey } from "@material-ui/core/colors";

import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";

const primary = {
  dark: "#005ecb",
  main: "#448aff",
  light: "#83b9ff",
};

const secondary = {
  dark: "#c60055",
  main: "#ff4081",
  light: "#ff79b0",
};

const utmaningenTheme = createMuiTheme({
  palette: {
    primary: primary,
    secondary: secondary,
    background: {
      default: grey[50],
    },
  },
  overrides: {
    MuiAvatar: {
      colorDefault: {
        backgroundColor: primary.main,
      },
    },
  },
});

export default utmaningenTheme;
