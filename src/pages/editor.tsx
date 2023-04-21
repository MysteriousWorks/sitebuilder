import React from "react";
import Builder from "@/packages/builder/components/Builder";
import Canvas from "@/packages/builder/components/Canvas";
import * as MaterialUI from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "@/packages/builder/components/UI/Header/HeaderDefault";
import Sidebar from "@/packages/builder/components/Sidebar";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Header from "../packages/builder/components/Header";
import { BuilderTheme } from "@/themes";

export async function getStaticProps() {
  return { props: { bodyClass: "editorPage" } };
}

export default function EditorPage() {
  return (
    <ThemeProvider theme={BuilderTheme}>
      <Builder
        initialPageMetaData={{
          id: "test-page",
          name: "Test Page",
          path: "/test",
        }}
      >
        <CssBaseline />
        <Sidebar />
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Header />
          <Canvas
            componentMap={{
              ...(MaterialUI as any),
              MenuIcon,
              IconButton,
              Search,
              SearchIcon,
              SearchIconWrapper,
              StyledInputBase,
            }}
          />
        </Box>
      </Builder>
    </ThemeProvider>
  );
}
