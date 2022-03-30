import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Login = (props) => {
  useEffect(() => {
    document.title = "Login";
  }, []);

  return <div>Login Page</div>;
};

Login.propTypes = {};

export default Login;
