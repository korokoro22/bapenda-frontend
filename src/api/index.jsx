//import axios
import axios from "axios";

function getToken() {
  return localStorage.getItem("token");
}

const Api = axios.create({
  //set default endpoint API
  // baseURL: 'http://127.0.0.1:8000'

  baseURL: "http://127.0.0.1/kp2/api-web-bapenda/public/api",
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

Api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      if (getToken() !== null) {
        error.config.headers["Authorization"] = `Bearer ${getToken()}`;

        return Api(error.config);
      } else {
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default Api;
