import axios from "axios";

const BASEURL = import.meta.env.VITE_COUNTRY_BASE_URL;
const TIMEOUTMSG = "Waiting for too long...Aborted!";
const timeout = 30000;

const config = {
  baseURL: BASEURL + "/v3.1",
  timeoutErrorMessage: TIMEOUTMSG,
  timeout,
};

const axiosInstance = axios.create(config);

export default axiosInstance;

