export const CONFIG = {
  API_URL: window.location.hostname.includes("localhost") ? `https://vault-dev.xion.ai:8443` : `https://${window.location.hostname}:8443`,
  ACCOUNT_API_URL: window.location.hostname.includes("localhost") ? `https://vault-dev.xion.ai:8445` : `https://${window.location.hostname}:8445`
};
