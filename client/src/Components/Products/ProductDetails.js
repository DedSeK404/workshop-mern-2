import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getoneprod } from "../../JS/actions/productActions";
import {useParams} from 'react-router-dom'

const ProductDeatils = () => {
  const dispatch=useDispatch()
  const {id}=useParams()
  useEffect(() => {
  dispatch(getoneprod(id))
  
  
  }, [])
  const produit=useSelector(state=>state.prod.details)
  return (
    <div className="container">
    
        <div className="row">
          <div className="col-6">
            <img src={produit.img} alt="" width={"250px"} />
            <p>{produit.name}</p>
          </div>
          <div className="col-6">
            <p>{produit.description}</p>
            <div>
      category:      {produit.category.map((el)=><span>{el}</span>)}
            </div>
            <div>
       size:     {produit.size.map((el)=><span>{el}</span>)}            </div>
            <div>
       color:     {produit.color.map((el)=><span>{el}</span>)}
            </div>
          </div>
        </div>

    </div>
  );
};

export default ProductDeatils;