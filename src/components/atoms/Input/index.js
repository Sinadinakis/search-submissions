import React from "react";
import PropTypes from "prop-types";

const Input = ({ name, placeholder, className, value, onChange }) => (
  <input
    type="text"
    id={`input-${name}`}
    name={name}
    className={className}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

Input.defaultProps = {
  className: "input",
  placeholder: "Add you search here",
};

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
