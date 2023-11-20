import { BRANDS_FETCH, GET_ALL_FETCH_FAIL } from "../types";
import axios from "axios";
import { API_URL } from "../../config/config";

export const getBrands_r = () => async (dispatch) => {
   await axios
      .get(`${API_URL}/brandspublic`)
      .then((res) => {
         dispatch({
            type: BRANDS_FETCH,
            payload: res.data,
         });
      })
      .catch((err) => {
         dispatch({
            type: GET_ALL_FETCH_FAIL,
            payload: err.message + ": " + err.config.url.replace(API_URL, "api"),
         });
      });
};
