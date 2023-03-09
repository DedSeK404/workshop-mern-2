import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getallprods } from "../../JS/actions/productActions";

const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallprods());
  }, []);
  const products = useSelector((state) => state.prod.products);
  console.log(products)
  return (
    <div style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>
      {products.map((el) => (
        <ProductCard key={el._id} prd={el} />
      ))}
    </div>
  );
};

export default ProductList;
