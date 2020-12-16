import cookie from "react-cookies";

const cookieOptions = {
  path: "/"
  // maxAge: 1000,
  // domain: 'http://localhost:3000',
  // secure: true,
  // httpOnly: true
};

export function betweenRange(value, min, max) {
  return value >= min && value <= max;
}

export function randomText(max = 10) {
  return Math.random()
    .toString(36)
    .substr(2, max);
}

export const runFuncs = fns => args => fns && fns.forEach(fn => fn & fn(args));

export const randomId = () =>
  Math.random()
    .toString(36)
    .slice(2);

export const kFormatter = num => {
  return Math.abs(num) > 999 ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k" : Math.sign(num) * Math.abs(num);
};

export const headerOptions = token => (token ? { headers: { "x-auth-token": token } } : {});

export const fileHeaderOptions = token => (token ? { headers: { "x-auth-token": token, "Content-Type": "multipart/form-data" } } : {});

export const fileDownloadHeaderOptions = token => (token ? { headers: { "x-auth-token": token }, responseType: "blob" } : {});

export const isInteger = str => {
  let integerValue = parseInt(str);
  let isNan = !isNaN(integerValue);
  return isNan;
};

export function setCookieItem(key, data) {
  cookie.save(key, data, cookieOptions);
}

export function getCookieItem(key) {
  return cookie.load(key);
}

export function removeCookieItem(key) {
  cookie.remove(key, cookieOptions);
}

export function getAllCookie() {
  cookie.loadAll();
}

export function getAllActiveNodes(folderPath) {
  const pathArray = folderPath.split("/");
  let nodeArray = [];
  let fullPath = "";
  for (let index = 0; index < pathArray.length; index++) {
    fullPath = fullPath === "" ? pathArray[index] : fullPath + "/" + pathArray[index];
    nodeArray.push(fullPath);
  }
  return nodeArray;
}
