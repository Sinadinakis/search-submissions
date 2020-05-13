import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Atoms
import Icon from "../atoms/Icon";

const Header = ({ title }) => (
  <nav className="navbar navbar-expand-sm navbar-dark mb-3 py-0 app__header">
    <div className="container">
      <a href="/" className="navbar-brand">
        {title}
      </a>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <Icon icon="home" /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/location" className="nav-link">
              <Icon icon="map-marker-alt" /> Location
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              <Icon icon="question" /> About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

Header.defaultProps = {
  title: "Assignment",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
