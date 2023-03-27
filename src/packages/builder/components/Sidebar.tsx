import React from "react";
import {
  ListItemButton,
  List,
  Paper,
  Tooltip,
  Box,
  Theme,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PlaylistAddCircleIcon from "@mui/icons-material/PlaylistAddCircle";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import LogoDevIcon from "@mui/icons-material/LogoDev";

const sidebarData = [
  {
    label: "Add Elements",
    icon: AddCircleIcon,
  },
  {
    label: "Add Section",
    icon: PlaylistAddCircleIcon,
  },
  {
    label: "Add Media",
    icon: AddPhotoAlternateIcon,
  },
  {
    label: "Page & Menu",
    icon: FileCopyIcon,
  },
];

const Sidebar: React.FC = () => {
  return (
    <Paper
      elevation={0}
      square={true}
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        width: "55px",
        height: "100%",
      }}
    >
      <Box
        component="a"
        href="#"
        sx={{
          backgroundColor: (theme) => theme.palette.grey[300],
          height: (theme) => theme.mixins.toolbar.height,
          minHeight: (theme) => theme.mixins.toolbar.minHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LogoDevIcon fontSize="large" />
      </Box>
      <List>
        {sidebarData &&
          sidebarData.map((item) => (
            <Tooltip key={item.label} title={item.label} placement="right">
              <ListItemButton
                sx={
                  {
                    p: 0,
                    justifyContent: "center",
                    height: "50px",
                    width: "100%",
                    ":hover > .iconWrap": {
                      backgroundColor: (theme: Theme) =>
                        theme.palette.secondary.light,
                    },
                    ":hover > .icon": {
                      color: (theme: Theme) => theme.palette.common.white,
                    },
                  } as any
                }
              >
                <Box
                  className="iconWrap"
                  component="div"
                  sx={{
                    p: "4px",
                    borderRadius: "50%",
                    height: "32px",
                    width: "32px",
                  }}
                >
                  <item.icon
                    className="icon"
                    fontSize="medium"
                    sx={
                      {
                        color: (theme: Theme) => theme.palette.grey[200],
                      } as any
                    }
                  />
                </Box>
              </ListItemButton>
            </Tooltip>
          ))}
      </List>
    </Paper>
  );
};

export default Sidebar;
