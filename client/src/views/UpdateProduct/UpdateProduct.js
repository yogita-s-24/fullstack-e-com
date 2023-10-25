import React, { useEffect, useState } from "react";
import "./UpdateProduct.css";
import showToast from "crunchy-toast";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [brand, setBrand] = useState("");

  const { _id } = useParams();

  const loadProduct = async () => {
    const response = await axios.get(`/product/${_id}`);

    const { name, price, description, productImage, brand } =
      response?.data?.data;

    setName(name);
    setPrice(price);
    setDescription(description);
    setProductImage(productImage);
    setBrand(brand);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const updateProduct = async () => {
    const updateeDetails = {
      name,
      price,
      description,
      productImage,
      brand,
    };

    const response = await axios.put(`/product/${_id}`, updateeDetails);
    showToast(response?.data?.message);
  };

  return (
    <>
      <h1 className="text-center mt-3">Update Product</h1>
      <form>
        <div
          className="card container w-50 mt-4 p-3"
          style={{ border: "1px solid #3e1e7f" }}>
          <div className="">
            <div className="container mt-3">
              <input
                type="text"
                placeholder="Enter Product Name Here"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="form-control"
              />
            </div>

            <div className="container mt-3">
              <input
                type="text"
                placeholder="Enter Price Here"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                className="form-control"
              />
            </div>

            <div className="container mt-3">
              <input
                type="text"
                placeholder="Enter Description Here"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                className="form-control"
              />
            </div>

            <div className="container mt-3">
              <input
                type="text"
                placeholder="Enter image URL here"
                value={productImage}
                onChange={(e) => {
                  setProductImage(e.target.value);
                }}
                className="form-control"
              />
            </div>

            <div className="container mt-3">
              <input
                type="text"
                placeholder="Enter Your Product Brand Here"
                value={brand}
                onChange={(e) => {
                  setBrand(e.target.value);
                }}
                className="form-control"
              />
            </div>
            <div className="text-center">
              <button
                className="my-4 add-btn"
                type="button"
                onClick={updateProduct}>
                Update Product
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default UpdateProduct;
