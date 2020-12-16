import React, { PureComponent } from "react";
import Parser from "html-react-parser";
import { ModalType, Fonts } from "../../../../constant";
// import { ContentArrow } from "../../../containers";
import "./story.scss";

export default class Story extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      heightofContent: 0,
    };
    this.divElement = React.createRef();
  }

  calculateHeight = () => {
    if (this.divElement && this.divElement.current) {
      return this.divElement.current.clientHeight;
    }
    return 0;
  };

  render() {
    const { activeContent, openModal } = this.props;
    const maxContent = activeContent.contentValue;
    const index = activeContent.id % Fonts.length;
    const font = Fonts[index];
    const heightofContent = this.calculateHeight();
    return (
      <div className="story">
        <h3 style={{ fontFamily: font, fontSize: 16 }}>{activeContent.contentTitle}</h3>
        <div className="description" ref={this.divElement}>
          <p>
            <span className="ql-size-large" style={{ fontFamily: font, fontSize: 16 }}>
              {Parser(maxContent)}
            </span>
          </p>
        </div>
        {heightofContent > 299 && (
          <button className="text-readmore" onClick={() => openModal(ModalType.SHOW_MORE_DETAIL)}>
            See more
          </button>
        )}
        {/* {contentList.length > 1 && <ContentArrow /> } */}
      </div>
    );
  }
}
