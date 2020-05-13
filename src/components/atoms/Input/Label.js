import React from "react";
import PropTypes from "prop-types";

const Label = ({ id, label, className }) => (
  <label className={className} htmlFor={id}>
    {label}
  </label>
);

Label.defaultProps = {
  className: "label",
};

Label.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default Label;
