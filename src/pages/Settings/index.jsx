import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Box, Container, IconButton } from "@mui/material";
import { Brightness4Rounded, Brightness7Rounded } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../../App";

const Settings = (props) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Container
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        color: "text.primary",
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Rounded />
        ) : (
          <Brightness4Rounded />
        )}
      </IconButton>
    </Container>
  );
};

Settings.propTypes = {};

export default Settings;
