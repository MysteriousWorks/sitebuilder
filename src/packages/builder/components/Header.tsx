import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import PageSelector from "./PageSelector";
import SavePreviewPublish from "./SavePreviewPublish";
import ViewportSelector from "./ViewportSelector";

const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: (theme) => theme.palette.common.white,
        height: (theme) => theme.mixins.toolbar.minHeight,
        boxShadow: 1,
      }}
    >
      <Toolbar>
        <PageSelector />
        <ViewportSelector />
        <SavePreviewPublish />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
