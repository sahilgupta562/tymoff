import { UPLOAD } from "../../actions";
import { findIndex } from "lodash";

const uploadingFilesReducer = (state = [], action) => {
  switch (action.type) {
    case UPLOAD.CLEAR_UPLOADING_FILES:
      return [];
    case UPLOAD.SET_UPLOADING_FILES:
      return [...state, ...action.uploadingFiles];
    case UPLOAD.UPDATE_UPLOADING_FILES: {
      const uploadedFile = action.uploadedFile;
      const uploadingFiles = [...state];
      const index = findIndex(uploadingFiles, { localId: uploadedFile.localId });
      uploadingFiles.splice(index, 1, { ...uploadingFiles[index], isSuccess: uploadedFile.success, isFailed: !uploadedFile.success });
      return [...uploadingFiles];
    }
    default:
      return state;
  }
};

export default uploadingFilesReducer;
