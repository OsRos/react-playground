import axios from "axios";

const request = axios.create({
/*   transformResponse: [
    (data) => {
      console.log(JSON.parse(data));
      return JSON.parse(data);
    },
  ], */
});

request.interceptors.response.use(
  (response) => response,
  (error) => {
      console.log(`Something went wrong ${error}`);
    //   return error
      return Promise.reject(error)
  }
);
export default request;
