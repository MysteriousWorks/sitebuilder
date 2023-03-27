import { createTheme, Theme } from "@mui/material";
import variables from "@/styles/variables.module.scss";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    secondaryAlt: Palette["primary"];
  }
  interface PaletteOptions {
    secondaryAlt: PaletteOptions["primary"];
  }
}

const hoverColor = "red";
const focusColor = "green";
const defaultColor = "purple";
const navbarHeight = "56px";
export const DefaultTheme = createTheme({});
export const BuilderTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: variables.primaryColor },
    secondary: { main: variables.secondaryColor },
    background: {
      paper: "#fff",
    },
    secondaryAlt: DefaultTheme.palette.augmentColor({
      name: "secondaryAlt",
      color: { main: variables.secondaryAltColor },
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700",
    }),
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: "56px",
          "@media (min-width: 600px)": {
            minHeight: "56px",
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        size: "small",
        fullWidth: true,
        variant: "standard",
        disableUnderline: true,
      },
      styleOverrides: {
        standard: ({ ownerState, theme }) => ({
          backgroundColor: "transparent",
          border: "none",
        }),
      },
    },
  },
});

export default BuilderTheme;
