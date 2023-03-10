import axios from "axios";
import { FAILED, GETALLPRODCUTSSUCCESS, GETONEPRODCUTSSUCCESS, PRODUCTLOADING } from "../actiontypes/productTypes";


/**
 * @route get /product/
 * @description get all products
 * @access public
 */
const baseURl = "http://localhost:7000/product";
export const getallprods = () => async (dispatch) => {
    dispatch({ type: PRODUCTLOADING });
    try {
      const { data } = await axios.get(baseURl+"/");
      console.log(data)
      dispatch({ type: GETALLPRODCUTSSUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FAILED, payload: error });
    }
  };
  /**
 * @route get /product/:idprod
 * @description get one product
 * @access public
 */
  export const getoneprod = (id) => async (dispatch) => {
    dispatch({ type: PRODUCTLOADING });
    try {
      const { data } = await axios.get(`${baseURl}/${id}`);
      console.log(data)
      dispatch({ type: GETONEPRODCUTSSUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FAILED, payload: error });
    }
  };