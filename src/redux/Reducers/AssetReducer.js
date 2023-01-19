import axios from "axios";

import {
  FETCH_ASSETS_SUCCESS,
  FETCH_ASSETS_ERROR,
  FETCH_ASSETS_REQUEST,
  FETCH_IMG_SUCCESS,
  FETCH_IMG_ERROR,
  FETCH_IMG_REQUEST
} from "../actions/actionTypes";

const intialState = {
  Assets: [],
  image: [],
  loading: false,
  error: "",
};

export const fetchAssetSuccess = (Assets) => {
  return {
    type: FETCH_ASSETS_SUCCESS,
    payload: Assets,
  };
};

export const fetchAssetRequest = () => {
  return {
    type: FETCH_ASSETS_REQUEST,
  };
};

export const fetchAssetFailure = (error) => {
  return {
    type: FETCH_ASSETS_ERROR,
    payload: error,
  };
};

export const fetchAsset = () => {
  return async function (dispatch) {
    dispatch(fetchAssetRequest);
    await axios
      .get("https://api.coincap.io/v2/assets?_limit=50")
      .then((response) => {
        const Assets = response?.data;
        dispatch(fetchAssetSuccess(Assets));
      })
      .catch((error) => {
        dispatch(fetchAssetFailure(error.message));
      });
  };
};

export const fetchSymbol = async (symbol) => {
  const changedSymbol = symbol.toLowerCase();
  const result = await axios.get(
    `https://assets.coincap.io/assets/icons/${changedSymbol}@2x.png`
  );
};
export function AssetReducer(state = intialState, action) {
  //console.log('actiosn types',action.type);
  switch (action.type) {
    case "FETCH_ASSETS_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_ASSETS_SUCCESS":
      return {
        loading: false,
        Assets: action.payload,
        error: "",
      };

    case "FETCH_ASSETS_ERROR":
      return {
        loading: false,
        Assets: [],
        error: action.payload,
      };

    default:
      return state;
  }
}
