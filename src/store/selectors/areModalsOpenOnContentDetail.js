import { createSelector } from "reselect";

const getModal = (state) => state.ui.modal;

const areModalsOpenOnContentDetail = createSelector([getModal], (modal) => {
  const isContentModalOpen = modal.content_detail || false;
  const isOtherModalOpen = !!modal.share || !!modal.login || !!modal.alert || !!modal.more_option || !!modal.copy_link || !!modal.report_content || !!modal.show_more_detail || !!modal.install_app;
  return isContentModalOpen ? isOtherModalOpen : false;
});

export default areModalsOpenOnContentDetail;
