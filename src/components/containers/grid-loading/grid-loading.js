import React, { PureComponent } from "react";
import "./grid-loading.scss";

class GridLoading extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div className="blank-tile" style={{ height: data.height, background: data.backgroundColor }}>
        <div
          style={{
            background: data.backgroundColor
          }}
        ></div>
      </div>
    );
  }
}

export default GridLoading;
