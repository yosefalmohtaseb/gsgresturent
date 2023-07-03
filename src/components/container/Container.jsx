import React, { Component } from "react";
import "./style.css";

class Container extends Component {
  render() {
    const { variant, children } = this.props;
    const containerClassName = variant ? `container ${variant}` : "container";

    return <div className={containerClassName}>{children}</div>;
  }
}

Container.defaultProps = {
  variant: "",
};

export default Container;
