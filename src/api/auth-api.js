import { get } from "lodash";
import { http, headerOptions, fileHeaderOptions } from "../core";
import { URL } from "./_urls.js";

const apiSendOtp = async data => {
  const response = await http.put(URL.SEND_OTP_API(), data);
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

const apiValidateOtp = async data => {
  const response = await http.put(URL.VEALIDATE_OTP_API(), data);
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

const apiGetUserProfile = async token => {
  const response = await http.get(URL.PROFILE_API(), headerOptions(token));
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

const apiUpdateProfile = async (data, token) => {
  const response = await http.put(URL.PROFILE_API(), data, headerOptions(token));
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

const apiUpdateProfileImage = async (formData, token) => {
  const response = await http.put(URL.PROFILE_IMAGE_API(), formData, fileHeaderOptions(token));
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

const apiRemoveProfileImage = async token => {
  const response = await http.delete(URL.PROFILE_IMAGE_API(), headerOptions(token));
  if (response && response.status >= 400) {
    const errorMessage = get(response, "data.message", "");
    throw new Error(errorMessage || "Something went wrong!");
  }
  return response || null;
};

export { apiSendOtp, apiValidateOtp, apiUpdateProfile, apiUpdateProfileImage, apiRemoveProfileImage, apiGetUserProfile };
