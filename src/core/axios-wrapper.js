import axios from "axios";

let _axios = null;

export default class Axios {
  static get Client() {
    _axios = _axios || axios.create({ withCredentials: true });
    return _axios;
  }
}
