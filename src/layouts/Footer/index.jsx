import React from "react";
import { Link, Typography } from "@mui/material";

const Footer = (props) => {
  return (
    <div className="footer">
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright @ "}
        <Link color="inherit">My React</Link> {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
};

export default Footer;
