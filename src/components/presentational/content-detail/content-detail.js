import React, { Component, Fragment } from "react";
import { ContentTypeId } from "../../../constant";
import Image from "./image";
import Video from "./video";
import Weblink from "./weblink";
import Story from "./story";

export default class ContentDetail extends Component {
  render() {
    const { activeContent, content, contentId, loadFromSession } = this.props;
    return (
      <Fragment>
        {!loadFromSession && activeContent.id === contentId && activeContent.typeId === ContentTypeId.Videos && <Video />}
        {(loadFromSession || content.typeId === ContentTypeId.Images) && <Image activeContent={content} />}
        {!loadFromSession && content.typeId === ContentTypeId.Text && <Story activeContent={content} />}
        {!loadFromSession && activeContent.id === contentId && content.typeId === ContentTypeId.Weblink && <Weblink activeContent={content} />}
      </Fragment>
    );
  }
}
