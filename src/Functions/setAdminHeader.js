import axios from "axios"

const setAdminHeader = (token = null) => {
  if (token) {
    axios.defaults.headers.common.admin = token;
  } else {
    delete axios.defaults.headers.common.admin;
  }
};

export default setAdminHeader
