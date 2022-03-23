import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

const Settings = props => {
  const navigate = useNavigate();

  return (
    <div onClick={() => { navigate('/profile') }}>
      Settings page
    </div>
  );
};

Settings.propTypes = {

};

export default Settings;