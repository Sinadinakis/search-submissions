import React from "react";
import PropTypes from "prop-types";

const Icon = ({ icon, styles }) => (
  <i className={`fas fa-${icon}`} style={styles} />
);

Icon.propTypes = {
  icon: PropTypes.string,
  styles: PropTypes.object,
};

export default Icon;
