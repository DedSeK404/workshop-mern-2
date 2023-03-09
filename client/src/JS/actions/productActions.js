import axios from "axios";
import { FAILED, GETALLPRODCUTSSUCCESS, LOADING } from "../actiontypes/authtypes";


/**
 * @route get /product/
 * @description get all products
 * @access public
 */
const baseURl = "http://localhost:7000/product/allproducts";
export const getallprods = () => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const { data } = await axios.get(baseURl);
      dispatch({ type: GETALLPRODCUTSSUCCESS, payload: data.product });
    } catch (error) {
      dispatch({ type: FAILED, payload: error });
    }
  };