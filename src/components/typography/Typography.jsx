import React, { Component } from "react";
import "./style.css";

class Typography extends Component {
  render() {
    const { variant, children } = this.props;
    const containerClassName = variant ? `typography ${variant}` : "typography";

    return <div className={containerClassName}>{children}</div>;
  }
}

Typography.defaultProps = {
  variant: "",
};

export default Typography;
