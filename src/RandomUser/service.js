import request from "./request";

export const getUserData = (url) => {
  return request.get(url).then(
    (response) => response.data,
    (error) => error
  );
};
