import { FAILED, GETALLPRODCUTSSUCCESS, GETONEPRODCUTSSUCCESS, PRODUCTLOADING } from "../actiontypes/productTypes";


const initialState = {
  loading: true,
  products: [],
  error: null,
  details:{}
};

export const productreducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTLOADING:
      return { ...state, loading: true };

    case GETALLPRODCUTSSUCCESS:
      return { ...state, products: payload.product, loading: false };
      case GETONEPRODCUTSSUCCESS:
        return { ...state, details: payload.product, loading: false };
    case FAILED:
      return { ...state, error: payload, loading: false };
      
    default:
      return state;
  }
};
