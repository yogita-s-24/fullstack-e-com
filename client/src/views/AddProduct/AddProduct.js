import React, { useState } from "react";
import "./AddProduct.css";
import showToast from "crunchy-toast" 
import axios from "axios";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [brand, setBrand] = useState("");

  const addProduct = async () =>{
    //add product to the database here
    if(!name || !price || !description || !productImage || !brand){
      showToast('Please fill all fields');
    }

    const product = {
      name : name,
      price : price,
      description : description,
      productImage :productImage,
      brand: brand
    }

    const response = await axios.post('/product',product);
    // console.log(response);
    showToast(response.data.message);
  }


  return (
    <>
      <h1 className="text-center">Add Product</h1>
      <form>
        <div className="card container w-50 mt-5 p-5">
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
              <button className="btn btn-dark mt-4" type="button" onClick={addProduct}>Add Products</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddProduct;
