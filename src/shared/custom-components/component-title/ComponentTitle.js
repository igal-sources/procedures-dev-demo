import React from "react";
import PropTypes from "prop-types";
import { Image } from "semantic-ui-react";
import "./component-title.scss";

const ComponentTitle = ({ title, image }) => {
  return (
    <div className="ComponentTitle-container">
      <div className="ComponentTitle-header">
        <Image className="ComponentTitle-header-image" src={image} />
        <p className="ComponentTitle-header-text">{title}</p>
      </div>
    </div>
  );
};

ComponentTitle.propTypes = {
  title: PropTypes.string,
};

export default ComponentTitle;
