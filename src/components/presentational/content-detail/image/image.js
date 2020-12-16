import React, { PureComponent, Fragment } from "react";
import { get } from "lodash";
import Slider from "react-animated-slider";
import { LazyImage } from "../../../containers";
import sessionImage from "../../../../assets/images/blank.jpg";
import "react-animated-slider/build/horizontal.css";
import "./image.scss";

export default class Image extends PureComponent {
  state = { activeSlide: 0 };
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  renderImages = contentUrl => {
    const { url, thumbnailImage, contentOcr } = contentUrl;
    let title = contentOcr;
    if (!title) {
      title = `Lets's take some tymoff`;
    }
    return <LazyImage containerStyle={{ height: "100%", width: "100%" }} style={{ height: "100%", width: "100%" }} alt={title} src={url} thumbnail={thumbnailImage} />;
  };

  renderSessionImages = () => {
    return <LazyImage containerStyle={{ height: "100%", width: "100%" }} style={{ height: "100%", width: "100%" }} alt={"Lets's take some tymoff"} src={sessionImage} />;
  };

  handleSlideChange = event => {
    const { stopScrollTimer } = this.props;
    stopScrollTimer();
    this.setState({ activeSlide: event.slideIndex });
  };

  dotsChange = index => {
    // console.log(this.sliderRef.current);
    // const TotalCount = this.sliderRef.current.slideCount;
    let animation = 'next';
    if (index > this.state.activeSlide) {
      animation = 'next'
    } else {
      animation = 'previous'
    }
    this.sliderRef.current.goTo(index, animation);
    this.setState({ activeSlide: index });
  }

  renderImageContent = () => {
    const { activeContent } = this.props;
    const { activeSlide } = this.state;
    const contentUrl = get(activeContent, "contentUrl", []);
    return (
      <Fragment>
        {contentUrl.length > 1 ? (
          <Fragment>
            <Slider duration={200} ref={this.sliderRef} onSlideChange={event => this.handleSlideChange(event)} infinite={false}>
              {contentUrl.map((content, index) => (
                <div className="slide" key={content.id || index}>
                  {this.renderImages(content)}
                </div>
              ))}
            </Slider>
            {<div className="album-dot">
              {contentUrl.map((content, index) => (
                <div key={index} onClick={e => this.dotsChange(index)} className={`album-dot-item ${activeSlide === index ? "active" : ""}`}></div>
              ))}
            </div>}
          </Fragment>
        ) : (
            <div className="slide" key={contentUrl[0].id}>
              <LazyImage containerStyle={{ height: "100%", width: "100%" }} style={{ height: "100%", width: "100%" }} alt={"alt"} src={contentUrl[0].url} thumbnail={contentUrl[0].thumbnailImage} />
            </div>
          )}
      </Fragment>
    );
  };

  render() {
    const { loadFromSession, activeContent } = this.props;
    const hasContentValue = !!activeContent.contentValue;
    return (
      <div className={`desktop_img web ${hasContentValue ? "img_height" : ""}`}>
        {loadFromSession && this.renderSessionImages()}
        {!loadFromSession && this.renderImageContent()}
      </div>
    );
  }
}
