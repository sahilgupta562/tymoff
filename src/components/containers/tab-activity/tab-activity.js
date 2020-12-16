import TabVisibility from "react-tab-visibility";
import { ContentTypeId } from "../../../constant";

export default class TabActivity extends TabVisibility {
  onTabVisibilityChange({ tabIsVisible }) {
    const { startScrollTimer, stopScrollTimer, activeTab, inactiveTab, activeContent } = this.props;
    // activeContent.typeId === ContentTypeId.Videos
    if (tabIsVisible) {
      activeContent.typeId !== ContentTypeId.Videos && startScrollTimer();
      activeTab();
    } else {
      stopScrollTimer();
      inactiveTab();
    }
  }
}
