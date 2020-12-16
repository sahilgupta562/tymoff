import { CONTENT } from "./action-types";

const loadContent = () => ({
  type: CONTENT.LOAD,
});

const contentOpen = () => ({
  type: CONTENT.CONTENT_DETAIL_OPEN,
});

const contentClose = () => ({
  type: CONTENT.CONTENT_DETAIL_CLOSE,
});

const clearContent = () => ({
  type: CONTENT.CLEAR,
});

const clearAction = () => ({
  type: CONTENT.CLEAR_ACTION,
});

const resetContentPage = () => ({
  type: CONTENT.PAGE_RESET,
});

const resetTotalPage = () => ({
  type: CONTENT.TOTAL_PAGE_RESET,
});

const setContent = (contents) => ({
  type: CONTENT.LOAD_SUCCESS,
  contents,
});

const refreshContent = (contents) => ({
  type: CONTENT.REFRESH_CONTENT,
  contents,
});

const setContentError = (error) => ({
  type: CONTENT.LOAD_FAILED,
  error,
});

const setContentPageChange = (currentPage) => ({
  type: CONTENT.PAGE_CHANGE,
  currentPage,
});

const setTotalPageChange = (totalPage) => ({
  type: CONTENT.TOTAL_PAGE_CHANGE,
  totalPage,
});

const setContentPerPageItemChange = (perPage) => ({
  type: CONTENT.PER_PAGE_CHANGE,
  itemsPerPage: perPage,
});

const clearFilter = () => ({
  type: CONTENT.FILTER_RESET,
});

const clearFilterOnDiscover = (discoverId) => ({
  type: CONTENT.DISCOVER_FILTER_RESET,
  discoverId,
});

const setCustomFilter = (filter) => ({
  type: CONTENT.CUSTOM_FILTER_CHANGE,
  filter,
});

const setFilter = (filter) => ({
  type: CONTENT.FILTER_CHANGE,
  filter,
});

const clearActiveContent = () => ({
  type: CONTENT.RESET_ACTIVE_CONTENT,
});

const clearActiveContentUrl = () => ({
  type: CONTENT.RESET_ACTIVE_CONTENT_URL,
});

const setActiveContent = (activeContent) => ({
  type: CONTENT.ACTIVE_CONTENT,
  activeContent,
});

const setActiveContentUrl = (activeContentUrl) => ({
  type: CONTENT.ACTIVE_CONTENT_URL,
  activeContentUrl,
});

const setActiveContentIndex = (index) => ({
  type: CONTENT.ACTIVE_CONTENT_INDEX,
  index,
});

const setInitialSlide = (initialSlide) => ({
  type: CONTENT.INITIAL_SLIDE,
  initialSlide,
});

const setContentAction = (contentAction) => ({
  type: CONTENT.ACTION_CHANGE,
  contentAction,
});

const setContentUserAction = (contentUserAction) => ({
  type: CONTENT.USER_ACTION_CHANGE,
  contentUserAction,
});

const setTotalContent = (totalContent) => ({
  type: CONTENT.TOTAL_CONTENT_COUNT,
  totalContent,
});

const startScrollTimer = () => ({
  type: CONTENT.START_CONTENT_SCROLL_TIMER,
});

const stopScrollTimer = () => ({
  type: CONTENT.STOP_CONTENT_SCROLL_TIMER,
});

const setLoadFromGrid = () => ({
  type: CONTENT.CONTENT_LOAD_FROM_GRID,
});

const loadContentDetail = (contentId) => ({
  type: CONTENT.LOAD_CONTENT_DETAIL,
  contentId,
});

const routeFromLightbox = () => ({
  type: CONTENT.ROUTE_FROM_LIGHTBOX,
});

const clearRouteFromLightbox = () => ({
  type: CONTENT.CLEAR_ROUTE_FROM_LIGHTBOX,
});

const hideContent = () => ({
  type: CONTENT.HIDE_CONTENT,
});

const reportContent = () => ({
  type: CONTENT.REPORT_CONTENT,
});

const setReportContentId = (reportId) => ({
  type: CONTENT.SET_REPORT_CONTENT_ID,
  reportId,
});

const downloadFile = () => ({
  type: CONTENT.CONTENT_DOWNLOAD,
});

const setAlreadyVisitedContentIds = (contentId) => ({
  type: CONTENT.SET_ALREADY_VISITED_CONTENT,
  contentId,
});

const clearAlreadyVisitedContentIds = () => ({
  type: CONTENT.RESET_ALREADY_VISITED_CONTENT,
});

const alreadyVisitedContent = () => ({
  type: CONTENT.CONTENT_ALREADY_VISITED,
});

const newContentVisited = () => ({
  type: CONTENT.NEW_CONTENT_VISITED,
});

const changeVolumeLevel = (value) => ({
  type: CONTENT.CHANGE_VOLUME,
  value,
});

const muteVideo = () => ({
  type: CONTENT.MUTE_VIDEO,
});

const unMuteVideo = () => ({
  type: CONTENT.UNMUTE_VIDEO,
});

const loadContentFromCache = () => ({
  type: CONTENT.LOAD_CONTENT_FROM_CACHE,
});

const loadContentFromApi = () => ({
  type: CONTENT.LOAD_CONTENT_FROM_API,
});

const loadSession = () => ({
  type: CONTENT.LOAD_SESSION,
});

const loadWebsite = () => ({
  type: CONTENT.LOAD_WEBSITE,
});

const loadSsr = () => ({
  type: CONTENT.LOAD_SSR,
});

const loadClient = () => ({
  type: CONTENT.LOAD_CLIENT,
});

const deleteContent = () => ({
  type: CONTENT.DELETE_CONTENT,
});

const showNextArrow = () => ({
  type: CONTENT.SHOW_NEXT_ARROW,
});

const hideNextArrow = () => ({
  type: CONTENT.HIDE_NEXT_ARROW,
});

export {
  loadContent,
  clearContent,
  setContent,
  setContentError,
  setContentPageChange,
  setContentPerPageItemChange,
  clearFilter,
  clearFilterOnDiscover,
  setFilter,
  resetContentPage,
  resetTotalPage,
  setTotalPageChange,
  clearActiveContent,
  setActiveContent,
  setCustomFilter,
  setContentAction,
  setActiveContentIndex,
  setContentUserAction,
  setTotalContent,
  startScrollTimer,
  stopScrollTimer,
  setLoadFromGrid,
  loadContentDetail,
  routeFromLightbox,
  clearRouteFromLightbox,
  hideContent,
  refreshContent,
  setReportContentId,
  reportContent,
  setActiveContentUrl,
  clearActiveContentUrl,
  downloadFile,
  setAlreadyVisitedContentIds,
  clearAlreadyVisitedContentIds,
  alreadyVisitedContent,
  newContentVisited,
  muteVideo,
  unMuteVideo,
  clearAction,
  loadContentFromCache,
  loadContentFromApi,
  loadSession,
  loadWebsite,
  loadSsr,
  loadClient,
  deleteContent,
  setInitialSlide,
  showNextArrow,
  hideNextArrow,
  contentOpen,
  contentClose,
  changeVolumeLevel,
};
