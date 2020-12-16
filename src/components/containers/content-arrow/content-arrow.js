import React, { PureComponent } from "react";
import { DetailpgDA } from "../../../icons";

export default class ContentArrow extends PureComponent {
  handleNextArrow = () => {
    const { showNextArrow } = this.props;
    showNextArrow();
  };
  render() {
    const { displayNextArrow } = this.props;
    return <div className="detail-arrow">
      {displayNextArrow &&
        <DetailpgDA width={"20px"} height={"20px"} className="down-arrow" />
        // <Down className="down" height={"20px"} width={"20px"} /> 
       }
    </div>;
  }
}
