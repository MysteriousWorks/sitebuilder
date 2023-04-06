import { Box, Button } from "@mui/material";
import React from "react";

const SavePreviewPublish: React.FunctionComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        minWidth: "270px",
        marginLeft: "auto",
      }}
    >
      <Button variant="outlined" color="secondary">
        Save
      </Button>
      <Button variant="outlined" color="secondary">
        Preview
      </Button>
      <Button variant="filled" color="secondary">
        Publish
      </Button>
    </Box>
  );
};

export default SavePreviewPublish;
