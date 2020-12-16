import React, { PureComponent } from "react";
import { kebabCase } from "lodash";
import { Link } from "react-router-dom";
import { ButtonBase } from "@material-ui/core";
import { LazyImage } from "../../components";
import "./discover-category.scss";
import { ModalType } from "../../constant";
import { DiscoverCategoryTag } from "../../jsonLD";

export default class DiscoverCategory extends PureComponent {
  renderImages = contentUrl => {
    const { url, thumbnailImage } = contentUrl;
    return <LazyImage containerStyle={{ height: "100%", width: "100%" }} style={{ height: "100%", width: "100%" }} alt={"alt"} src={url} thumbnail={thumbnailImage} />;
  };

  openLoginPopUp = () => {
    const { openModal } = this.props;
    openModal(ModalType.LOGIN);
  };

  render() {
    const { discoverContentList, userDiscoverContentList, isLoggedIn } = this.props;
    return (
      <div className="discover-mobile">
        <DiscoverCategoryTag />
        <div className="super-like disc">
          {!!discoverContentList.length &&
            discoverContentList.map((discoverContent, index) => (
              <div key={index} className="discover">
                <h2>{discoverContent.name}</h2>
                <div className="img-tile">
                  {discoverContent.contentList.map((content, contentIndex) => (
                    <div key={contentIndex} className="slides">
                      <Link to={`/discover/${kebabCase(discoverContent.name)}`}>{this.renderImages(content.contentUrl[0])}</Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          {!!userDiscoverContentList.length &&
            userDiscoverContentList.map((discoverContent, index) => (
              <div key={index} className="discover">
                <h2>{discoverContent.name}</h2>
                <div className={`img-tile ${!isLoggedIn ? "no-content" : ""}`}>
                  {!isLoggedIn && <ButtonBase onClick={this.openLoginPopUp}>{discoverContent.message}</ButtonBase>}
                  {isLoggedIn && ((!!discoverContent.contentList && !!!discoverContent.contentList.length) || !discoverContent.contentList) && <p>{discoverContent.message}</p>}
                  {!!discoverContent.contentList &&
                    !!discoverContent.contentList.length &&
                    discoverContent.contentList.map((content, contentIndex) => (
                      <div key={contentIndex} className="slides">
                        <Link to={`/discover/${kebabCase(discoverContent.name)}`}>{isLoggedIn && this.renderImages(content.contentUrl[0])}</Link>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
