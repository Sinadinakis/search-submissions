import React from "react";
import PropTypes from "prop-types";

// CSS
import "../../assets/css/button.css";

const Button = ({ children, className, ...props }) => (
  <button type="button" className={className} {...props}>
    {children}
  </button>
);

Button.defaultProps = {
  className: "button",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
