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

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    filled: true;
  }
}

const hoverColor = "red";
const focusColor = "green";
const defaultColor = "purple";
const navbarHeight = "56px";
export const DefaultTheme = createTheme({});

const BaseTheme = createTheme({
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
});

export const ComponentTheme = createTheme({
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
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          textTransform: "capitalize",
        },
      },
      variants: [
        {
          props: { variant: "filled" },
          style: {
            boxShadow: "none",
            backgroundColor: BaseTheme.palette.secondary.main,
            ":hover": {
              backgroundColor: BaseTheme.palette.secondary.light,
            },
          },
        },
      ],
    },
  },
});

export const BuilderTheme = createTheme(ComponentTheme, BaseTheme);

export default BuilderTheme;
