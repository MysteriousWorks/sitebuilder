import React from "react";
import { Box, IconButton, Theme, Paper, Typography } from "@mui/material";
import Computer from "@mui/icons-material/Computer";
import TabletMac from "@mui/icons-material/TabletMac";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

const ViewportSelector: React.FunctionComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        borderWidth: "0 1px 0 1px",
        borderColor: (theme: Theme) => theme.palette.grey[300],
        borderStyle: "solid",
        mr: 2,
        ml: "auto",
        px: 2,
      }}
    >
      <Box
        sx={{
          borderWidth: "0 1px 0 0",
          borderColor: (theme: Theme) => theme.palette.grey[300],
          borderStyle: "solid",
          mr: 2,
          pr: 2,
          width: "200px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          color="secondary"
          sx={{
            backgroundColor: (theme: Theme) => theme.palette.secondaryAlt.main,
          }}
        >
          <Computer />
        </IconButton>
        <IconButton>
          <TabletMac />
        </IconButton>
        <IconButton>
          <StayCurrentPortraitIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "100px",
        }}
      >
        <Paper
          elevation={0}
          variant="outlined"
          sx={{
            backgroundColor: (theme: Theme) => theme.palette.secondaryAlt.main,
            p: "5px",
            height: "46px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            "& span": {
              fontSize: "10px",
            },
          }}
        >
          <Typography component="p" fontSize={"12px"}>
            1052 px
          </Typography>
          <Typography component="span">100%</Typography>
          <ZoomOutIcon sx={{ height: "100%", alignSelf: "flex-end" }} />
        </Paper>
      </Box>
    </Box>
  );
};

export default ViewportSelector;
