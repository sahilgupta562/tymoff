import { combineReducers } from "redux";

import dataReducer from "./data";
import errorReducer from "./error";
import loadingReducer from "./loading";
import pageReducer from "./page";
import perPageReducer from "./per-page";
import filterReducer from "./filter";
import totalPageReducer from "./total-page";
import activeContentReducer from "./active-content";
import contentActionReducer from "./content-action";
import activeContentIndexReducer from "./active-content-index";
import contentUserActionReducer from "./content-user-action";
import totalContentReducer from "./total-content";
import hasContentScrollReducer from "./has-content-scroll";
import loadFromGridReducer from "./content-select-from-grid";
import activeContentIdReducer from "./active-contentId";
import routeFromLightboxReducer from "./route-from-lightbox";
import reportContentReducer from "./report-content";
import activeContentUrlReducer from "./active-content-url";
import alreadyVisitedContentIdsReducer from "./already-visited-contentIds";
import contentAlreadyVisitedReducer from "./content-already-visited";
import videoMutedReducer from "./video-muted";
import cacheContentReducer from "./cache-content";
import sessionLoadReducer from "./load-from-session";
import ssrContentLoadReducer from "./load-from-ssr";
import initialSlideReducer from "./initial-slide";
import showNextArrowReducer from "./show-next-arrow";
import contentDetailOpenReducer from "./content-detail-open";
import volumeLevelReducer from "./volume-level";

const contentReducers = combineReducers({
  data: dataReducer,
  error: errorReducer,
  isLoading: loadingReducer,
  currentPage: pageReducer,
  itemsPerPage: perPageReducer,
  totalPage: totalPageReducer,
  filter: filterReducer,
  activeContent: activeContentReducer,
  activeContentUrl: activeContentUrlReducer,
  contentAction: contentActionReducer,
  activeContentIndex: activeContentIndexReducer,
  contentUserAction: contentUserActionReducer,
  totalContent: totalContentReducer,
  isScrollTimerEnable: hasContentScrollReducer,
  showNextArrow: showNextArrowReducer,
  loadFromGrid: loadFromGridReducer,
  activeContentId: activeContentIdReducer,
  routeFromLightbox: routeFromLightboxReducer,
  reportId: reportContentReducer,
  alreadyVisitedContentIds: alreadyVisitedContentIdsReducer,
  contentAlreadyVisited: contentAlreadyVisitedReducer,
  videoMuted: videoMutedReducer,
  isCacheContent: cacheContentReducer,
  loadFromSession: sessionLoadReducer,
  loadFromSsr: ssrContentLoadReducer,
  initialSlide: initialSlideReducer,
  isContentDetailOpen: contentDetailOpenReducer,
  volumeLevel: volumeLevelReducer,
});

export { contentReducers };
