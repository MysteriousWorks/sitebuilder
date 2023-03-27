import {
  Paper,
  FormControl,
  MenuItem,
  MenuList,
  Select,
  InputLabel,
  SelectChangeEvent,
  SelectProps,
  Theme,
} from "@mui/material";
import React from "react";

const BuilderSelect: React.FunctionComponent<
  SelectProps & { label?: string }
> = ({ children, label, ...props }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: (theme: Theme) => theme.palette.secondaryAlt.main,
        p: "5px",
        height: "46px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        "& span": {
          fontSize: "10px",
        },
      }}
    >
      {label && <span>{label}</span>}
      <Select {...props}>{children}</Select>
    </Paper>
  );
};

const PageSelector: React.FC = () => {
  const [page, setPage] = React.useState("/");

  const handleChange = (event: SelectChangeEvent) => {
    setPage(event.target.value as string);
  };

  return (
    <FormControl size="medium" sx={{ mx: 0, width: "200px" }}>
      <BuilderSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={page}
        label="Page"
        onChange={handleChange as any}
      >
        <MenuItem value={"/"}>Home Page</MenuItem>
        <MenuItem value={"/help"}>Help Page</MenuItem>
        <MenuItem value={"/product"}>Product Page</MenuItem>
      </BuilderSelect>
    </FormControl>
  );
};

export default PageSelector;
