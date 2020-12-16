import React, { PureComponent, Fragment } from "react";
import DiscoverRouter from "./Discover-Router";
import { DiscoverOptionTag } from "../../jsonLD";
class Discover extends PureComponent {
  componentDidMount() {
    const { onRenderDiscover } = this.props;
    onRenderDiscover();
  }

  componentWillUnmount() {
    const { onLeaveDiscover } = this.props;
    onLeaveDiscover();
  }

  render() {
    const { discoverList, userDiscoverList, location } = this.props;
    let title, description;
    if (location.pathname === "/discover/surprise-me") {
      title = "Get surprised | tymoff";
      description = "We can surprise you every time you check tymoff.";
    } else if (location.pathname === "/discover/trending") {
      title = "See what’s trending today | tymoff";
      description = "Find popular photos, videos or articles that are trending today.";
    }
    return (
      <Fragment>
        {title && description && <DiscoverOptionTag Url={`https://www.tymoff.com${location.pathname}`} Title={title} Description={description} />}
        <DiscoverRouter discoverList={discoverList} userDiscoverList={userDiscoverList} />
      </Fragment>
    );
  }
}

export default Discover;
