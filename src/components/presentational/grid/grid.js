import React, { PureComponent, Fragment } from "react";
import StackGrid from "react-stack-grid";
import { MasonryInfiniteScroller } from "../../../modules";
import { ButtonBase } from "@material-ui/core";
import { isMobile } from "react-device-detect";
// import { Waypoint } from "react-waypoint";
import { GridLoading } from "../../containers";
import { BlankItems, ContentAction } from "../../../constant";
import { clearCache } from "../../../core";
import { Newfeed, Uparrow } from "../../../icons";
import { isServer } from "../../../store";
import Card from "../card";
import "./grid.scss";
class Grid extends PureComponent {
  componentDidMount() {
    document.addEventListener("scroll", this.takeToTop, false);
  }

  componentDidUpdate = (prevProps) => {
    const { isLoading } = this.props;
    if (isLoading !== prevProps.isLoading) {
      this.grid && this.grid.updateLayout();
    }
  };

  componentWillUnmount() {
    document.removeEventListener("scroll", this.takeToTop, false);
  }

  loadMore = () => {
    const {
      setContentPageChange,
      loadContent,
      currentPage,
      isLoading,
      setContentAction,
      contentAction,
      isCacheContent,
      loadContentFromApi,
      loadFromSession,
      // loadFromSsr,
      loadClient,
      totalPage,
    } = this.props;
    if (!loadFromSession && !isCacheContent && !isLoading && currentPage < totalPage) {
      setContentPageChange(currentPage + 1);
      contentAction ? setContentAction(contentAction) : loadContent();
    }
    loadContentFromApi();
    loadClient();
    this.grid && this.grid.updateLayout();
  };

  takeToTop = () => {
    if (typeof window !== "undefined") {
      let element = document.getElementById("btnTakeToTop");
      if (window.pageYOffset > 1300 && element) {
        element.style.display = "block";
      } else if (element) {
        element.style.display = "none";
      }
    }
  };

  scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  onRefresh = () => {
    this.loadNewContent();
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  loadNewContent = () => {
    clearCache();
    const { contentAction, setContentPageChange, setContentAction, loadContent, clearContent, hideNewfeed } = this.props;
    hideNewfeed();
    setContentPageChange(0);
    clearContent();
    contentAction ? setContentAction(contentAction) : loadContent();
  };

  render() {
    const columnWidth = isMobile ? "48%" : 250;
    const { contentList, isLoading, newFeed, loadFromSession, contentAction, totalPage, currentPage } = this.props;
    return (
      <Fragment>
        {newFeed && !!(contentAction !== ContentAction.upload) && (
          <ButtonBase className="newpost" onClick={this.loadNewContent}>
            <Newfeed width={"16px"} height={"16px"} className="new-feed" />
            New Feed
          </ButtonBase>
        )}
        <MasonryInfiniteScroller
          hasMore={!!(currentPage < totalPage)}
          loadMore={() => {
            !loadFromSession && !isLoading && this.loadMore();
          }}
        >
          {!!contentList.length && (
            <StackGrid
              className={isMobile && !!(contentAction === ContentAction.upload) ? "grid grid-account" : "grid"}
              monitorImagesLoaded={false}
              columnWidth={columnWidth}
              appearDelay={0}
              duration={0}
              gridRef={(grid) => (this.grid = grid)}
              enableSSR={true}
            >
              {contentList.map((content, index) => (
                <Fragment key={index}>
                  <Card content={content} contentIndex={index} />
                </Fragment>
              ))}
              {isLoading && BlankItems.map((data, index) => <GridLoading key={data.id || index} data={data} />)}
              {/* {!loadFromSession && !isLoading && (
              <Waypoint
                onEnter={() => {
                  this.loadMore();
                }}
              />
            )} */}
            </StackGrid>
          )}
        </MasonryInfiniteScroller>
        {isMobile ? null : (
          <div style={{ display: "none" }} id="btnTakeToTop" className="scroll">
            <ButtonBase
              onClick={() => {
                this.scrollToTop();
              }}
            >
              <Uparrow width={"20px"} height={"24px"} className="uparrow" />
            </ButtonBase>
          </div>
        )}
        {!isServer && !isLoading && !!!contentList.length && (
          <div className="coming-soon">
            <span>No Content Found</span>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Grid;
