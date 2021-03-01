import { SET_LOCALE } from "./constants";

export const setLocale = (locale) => {
  return {
    type: SET_LOCALE,
    payload: {
      locale,
    },
  };
};
