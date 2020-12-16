/* eslint-disable */
import { isEmpty } from "lodash";
import moment from "moment";
import { isServer } from "../store";

export function betweenRange(value, min, max) {
  return value >= min && value <= max;
}

export function randomText(max = 10) {
  return Math.random().toString(36).substr(2, max);
}

export const runFuncs = (fns) => (args) => fns && fns.forEach((fn) => fn & fn(args));

export const randomId = () => Math.random().toString(36).slice(2);

export const kFormatter = (num) => {
  return Math.abs(num) > 999 ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k" : Math.sign(num) * Math.abs(num);
};

export const headerOptions = (token) => (token ? { headers: { "x-auth-token": token } } : {});

export const metaHeaderOptions = () => ({ headers: { Authorization: "Simple simnxB3dwTN8kds9p6SGMpGoOJC1", "Content-Type": "application/json" } });

export const contactHeaderOptions = () => ({ headers: { "Content-Type": "application/json" } });

export const fileHeaderOptions = (token) => (token ? { headers: { "x-auth-token": token, "Content-Type": "multipart/form-data" } } : {});

export const fileDownloadHeaderOptions = (token) => (token ? { headers: { "x-auth-token": token }, responseType: "blob" } : {});

export const dynamicLinkInfo = (contentId) => {
  const data = {
    dynamicLinkInfo: {
      domainUriPrefix: "https://dl.tymoff.com",
      link: "https://tymoff.com/content/" + contentId,
      androidInfo: {
        androidPackageName: "com.tymoff",
      },
      iosInfo: {
        iosBundleId: "com.tymoff",
      },
    },
  };
  return data;
};

// export const getEncodedContentUrl = (contentId) => {
//   const encryptedUrl = btoa(contentId);
//   return `https://tymoff.com/content/${encryptedUrl.replace(/=/g, "")}`;
// };

export const feedbackData = (description, title) => ({ showFeedback: false, subject: "", title: title, description: description, errors: {}, submitted: false });

export const contactData = (name, email, message) => ({ name: name, email: email, message: message });

export const sendOtpInfo = (phone, countryCode) => {
  const data = {
    flowType: "login",
    socialType: "app",
    phone,
    countryCode,
  };
  return data;
};

export const getContentData = (localId, title, description, typeId, languageId, catId, url) => {
  return {
    localId,
    title,
    description,
    typeId,
    languageId,
    catId,
    url,
    isCreated: false,
  };
};

export const fileFormData = (localId, contentFiles) => {
  const matched = contentFiles.filter((file) => file.localId === localId);
  const files = matched[0].files;
  if (files && !!files.length) {
    let form = new FormData();
    for (let index = 0; index < files.length; index++) {
      form.append("files", files[index].file);
    }
    return form;
  }
  return null;
};

export const storyFormData = (descriptions) => {
  let form = new FormData();
  form.append("descriptions", descriptions);
  return form;
};

export const isInteger = (str) => {
  let integerValue = parseInt(str);
  let isNan = !isNaN(integerValue);
  return isNan;
};

export const getFileExtension = (file) => {
  var regexp = /\.([0-9a-z]+)(?:[\?#]|$)/i;
  var extension = file.match(regexp);
  return extension && extension[1];
};

export const getFileNameFromUrl = (url) => {
  if (url) {
    var m = url.toString().match(/.*\/(.+?)\./);
    if (m && m.length > 1) {
      return m[1];
    }
  }
  return "";
};

export function getCacheObject() {
  let cache;
  if (typeof window !== "undefined") {
    cache = JSON.parse(localStorage.getItem("cache"));
    return cache || {};
  }
}

export const loadCacheData = (url, filterObj, userId) => {
  let cacheKey = `${url}_${JSON.stringify(filterObj)}`;
  if (userId) cacheKey = `${cacheKey}_${userId}`;
  const dynamicKey = window.btoa(cacheKey);
  const cacheObj = getCacheObject();
  if (!isEmpty(cacheObj)) {
    const contentData = cacheObj[dynamicKey];
    if (contentData) {
      const creationDate = moment(contentData.created);
      const currentDate = moment(new Date());
      const diffMins = currentDate.diff(creationDate, "minutes");
      if (diffMins > 30) return null;
      return { data: contentData.data, totalElements: contentData.totalElements, totalPage: contentData.totalPage };
    } else return null;
  } else {
    return null;
  }
};

export const setCacheData = (url, filterObj, userId, data, totalElements, totalPage) => {
  let cacheKey = `${url}_${JSON.stringify(filterObj)}`;
  if (userId) cacheKey = `${cacheKey}_${userId}`;
  const dynamicKey = window.btoa(cacheKey);
  const cacheObj = getCacheObject();
  if (!isEmpty(cacheObj)) {
    let contentData = cacheObj[dynamicKey];
    if (!isEmpty(contentData)) {
      contentData.data = data;
      contentData.created = new Date();
      contentData.totalElements = totalElements;
      contentData.totalPage = totalPage;
    } else {
      cacheObj[dynamicKey] = { data, totalElements, totalPage, created: new Date() };
    }
    localStorage.setItem("cache", JSON.stringify(cacheObj));
  } else {
    let cacheObj = {};
    cacheObj[dynamicKey] = { data, totalElements, totalPage, created: new Date() };
    localStorage.setItem("cache", JSON.stringify(cacheObj));
  }
};

export const clearCache = () => {
  if (!isServer) {
    localStorage.removeItem("cache");
  }
};

export const isValidYoutubeUrl = (url) => {
  const regex = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
  return regex.test(url);
};

export const setGlobalThemeVariable = (darkTheme) => {
  if (!isServer) {
    document.documentElement.style.setProperty("--main-bg-color", darkTheme ? "#ffffff" : "#111111");
    document.documentElement.style.setProperty("--main-header-bg-color", darkTheme ? "#ffffff" : "#303030");
    document.documentElement.style.setProperty("--main-modal-header-bg-color", darkTheme ? "#efefef" : "#444444");
    document.documentElement.style.setProperty("--main-modal-bg-color", darkTheme ? "#ffffff" : "#222222");
    document.documentElement.style.setProperty("--main-modal-secondary-bg-color", darkTheme ? "#ffffff" : "#333333");
    document.documentElement.style.setProperty("--main-color", darkTheme ? "#303030" : "#aaaaaa");
    document.documentElement.style.setProperty("--main-card-color", darkTheme ? "#606060" : "#aaaaaa");
    document.documentElement.style.setProperty("--main-card-bg-color", darkTheme ? "#ffffff" : "#2b2b2b");
    document.documentElement.style.setProperty("--grey-white", darkTheme ? "#707070" : "#ffffff");
    document.documentElement.style.setProperty("--svg-sidebar-color", darkTheme ? "#505050" : "#707070");

    document.documentElement.style.setProperty("--menu-btn-border", darkTheme ? "#dddddd" : "#3a3a3a");
    document.documentElement.style.setProperty("--btn-border", darkTheme ? "#cccccc" : "#3a3a3a");

    document.documentElement.style.setProperty("--menu-btn-color", darkTheme ? "#606060" : "#aaaaaa");
    document.documentElement.style.setProperty("--menu-btn-bg-active", darkTheme ? "#e2e2e2" : "#4b4b4b");

    // document.documentElement.style.setProperty("--menu-btn-bg-active", darkTheme ? "#efefef" : "#4b4b4b");
    document.documentElement.style.setProperty("--menu-btn-color-active", darkTheme ? "#505050" : "#eeeeee");
    document.documentElement.style.setProperty("--input-text", darkTheme ? "#707070" : "#eeeeee");
    document.documentElement.style.setProperty("--input-bg", darkTheme ? "#f3f3f3" : "#555555");

    document.documentElement.style.setProperty("--select-count-lang-btn-color", darkTheme ? "#707070" : "#eeeeee");
    document.documentElement.style.setProperty("--select-count-lang-btn-bg", darkTheme ? "#efefef" : "#4b4b4b");
    document.documentElement.style.setProperty("--logo-primary", darkTheme ? "#ea3c78" : "#eeeeee");
    document.documentElement.style.setProperty("--logo-secondary", darkTheme ? "#2D2D2D" : "#eeeeee");
    document.documentElement.style.setProperty("--h-border", darkTheme ? "#f9f9f9" : "trasparent");
    document.documentElement.style.setProperty("--card-border", darkTheme ? "#f3f3f3" : "trasparent");


    document.documentElement.style.setProperty("--sidemenu-toggle-active", darkTheme ? "#ea3c78" : "#eeeeee");
    document.documentElement.style.setProperty("--placeholder", darkTheme ? "#909090" : "#aaaaaa");
    document.documentElement.style.setProperty("--title", darkTheme ? "#606060" : "#dddddd");
    document.documentElement.style.setProperty("--text-color", darkTheme ? "#606060" : "#aaaaaa");
    document.documentElement.style.setProperty("--menu-hover-bg", darkTheme ? "#f4f4f4" : "#444444");
    document.documentElement.style.setProperty("--menu-hover-bg1", darkTheme ? "#e7e7e7" : "#444444");

    document.documentElement.style.setProperty("--menu-hover-text", darkTheme ? "#6394b4" : "#eeeeee");

    document.documentElement.style.setProperty("--profile-img-bg", darkTheme ? "#aaaaaa" : "#707070");
    document.documentElement.style.setProperty("--verScrollBg", darkTheme ? "#efefef" : "#909090");
    document.documentElement.style.setProperty("--verScrollBtn", darkTheme ? "#909090" : "#404040");

    document.body.className = darkTheme ? "" : "dkt";
  }
};
