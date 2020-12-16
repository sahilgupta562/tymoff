export const CONFIG = {
  API_URL: window.location.hostname.includes("localhost") ? `https://dev.test.ai:8443` : `https://${window.location.hostname}:8443`,
  ACCOUNT_API_URL: window.location.hostname.includes("localhost") ? `https://dev.test.ai:8445` : `https://${window.location.hostname}:8445`
};
