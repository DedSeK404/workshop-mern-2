import {
  FAILED,
  GETALLPRODCUTSSUCCESS,
  LOADING,
} from "../actiontypes/authtypes";

const initialState = {
  loading: true,
  products: [],
  error: null,
};

export const productreducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true };

    case GETALLPRODCUTSSUCCESS:
      return { ...state, products: payload, loading: false };

    case FAILED:
      return { ...state, error: payload, loading: false };
      
    default:
      return state;
  }
};
