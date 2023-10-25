import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
// import { useParams } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    //fetch data from backend
    const response = await axios.get("/products");
    //  console.log(response)
    setProducts(response?.data?.data);
    console.log(response.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <h1 className="text-center mt-2">All Products</h1>
      <div className="d-flex justify-content-evenly">
      {products?.map((product, index) => {
        const {_id, name, price, description, productImage, brand } = product;

        return (
          <div
            className="card shadow text-center"
            style={{ width: "15rem" }}
            key={index}>
            <div className="card-body">
              <img
                src={productImage}
                alt="product"
                height="100px"
                className="d-block mx-auto image"
              />
              <p className="text-center m-0">{name}</p>
              <p className="text-center m-0 text-secondary">{description}</p>
              <p className="text-center m-0">₹{price}</p>
              <p className="text-center m-0 text-danger fs-6">{brand}</p>
              <div className="container bg-warning p-1 w-50">
                <a href={`/product-detail/${_id}`} target="_blank">
                  View More
                </a>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
}

export default Home;
