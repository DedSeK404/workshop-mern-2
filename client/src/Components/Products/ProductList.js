import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getallprods } from "../../JS/actions/productActions";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductList = () => {
  const products = useSelector((state) => state.prod.products);
  const loading = useSelector((state) => state.prod.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallprods());
  }, []);

  // console.log(products)
  const currentUser=useSelector(state=> state.auth.currentUser)
  return (
    <>{currentUser?.role=="admin"||currentUser?.role=="seller"&&<Link to='/add'>
   
    <Typography  textAlign="center">Add product</Typography>

  </Link>}
    <div style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>
      {!loading&&products.map((el) => (
        <ProductCard key={el._id} prd={el} />
      ))}
    </div>
    </>
  );
};

export default ProductList;
