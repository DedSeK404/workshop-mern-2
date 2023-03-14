import axios from "axios";
import { ADDPRODUCTSUCCESS } from "../actiontypes/authtypes";
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
/**
 * @route POST /product/add
 * @description add new product
 * @access protected(authentifié+role:admin/seller)
 */

  export const addproduct = (newProduct, navigate) => async (dispatch) => {
    dispatch({
      type: PRODUCTLOADING,
    });
    const opts = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    console.log(`Bearer ${localStorage.getItem("token")}`);console.log(newProduct)
    try {
      const res = await axios.post(baseURl+"/add", newProduct,opts);
      console.log("res", res.data);
      alert(`${res.data.msg}`);
      dispatch({ type: ADDPRODUCTSUCCESS });
      dispatch(getallprods());
      navigate("/products");
    } catch (error) {
      console.log(error);
      dispatch({
        type: FAILED,
        payload: error,
      });
    }
  };