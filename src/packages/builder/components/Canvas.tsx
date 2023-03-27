import { Paper, ThemeProvider } from "@mui/material";
import React from "react";
import { useRecoilValue } from "recoil";
import { DefaultTheme } from "@/themes";
import { PageContentState } from "../state";
import FocusController from "./FocusController";
import { Header } from "./UI/Header";

type CanvasProps = {
  componentMap: Record<string, React.ComponentType>;
};

const Canvas: React.FC<CanvasProps> = ({ componentMap }) => {
  let pageContent = useRecoilValue(PageContentState);

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Paper
        component="main"
        sx={{
          position: "static",
          m: 2,
          backgroundColor: (theme) => theme.palette.background.paper,
          height: "100%",
          overflow: "auto",
        }}
        square
      >
        <FocusController />
        <Header
          headerContent={pageContent.header}
          componentMap={componentMap}
        />
      </Paper>
    </ThemeProvider>
  );
};

export default Canvas;
