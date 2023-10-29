import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import axios from "axios";

function ProductDetail() {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  const loadProduct = async () => {
    const response = await axios.get(`/product/${id}`);
    setProduct(response?.data?.data);
  };

  useEffect(() => {
    loadProduct();
  });

  return (
    <>
      <h1 className="text-center">ProductDetail</h1>
      <h5 className="text-center mt-2">Product ID {id}</h5>
      <div className="container mt-5" >
      <div className="border shadow d-flex justify-content-evenly align-items-center ">
        <div className="product-container">
          <img src={product?.productImage} style={{ width: "300px" }} />
        </div>
        <div className="">
          <h4 className="child-element px-5">{product?.name}</h4>
          <p className="child-element px-5">{product?.description}</p>
          <p className="child-element px-5">₹ {product?.price}</p>
          <h6 className="child-element px-5">{product?.brand}</h6>
        </div>
      </div>
      </div>
    </>
  );
}

export default ProductDetail;
