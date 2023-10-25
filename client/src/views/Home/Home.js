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

  const deleteProduct = async (_id) => {
    const response = await axios.delete(`/product/${_id}`);
    if (true) {
      loadProducts();
    }
  };

  return (
    <>
      <h1 className="text-center mt-2">All Products</h1>
      <div className="d-flex justify-content-evenly flex-wrap">
        {products?.map((product, index) => {
          const {
            _id,
            name,
            price,
            // description,
            productImage,
            brand,
          } = product;

          return (
            <div
              className="card shadow text-center card-container"
              style={{ width: "18rem" }}
              key={index}>
              <div className="card-body position-relative">
                <div>
                  <a
                    onClick={() => {
                      deleteProduct(_id);
                    }}
                    className="delete-icon shadow p-2 ">
                    ❌
                  </a>

                  <a
                    href={`/update-product/${_id}`}
                    target="_blank"
                    className="update-icon shadow p-2 ">
                    🖊
                  </a>
                </div>
                <div>
                  <img
                    src={productImage}
                    alt="product"
                    height="230px"
                    className="d-block mx-auto image"
                  />
                  <h5 className="text-center m-0">{name}</h5>
                  {/* <p className="text-center m-0 text-secondary">{description}</p> */}
                  <p className="text-center m-0">₹{price}</p>
                  <p className="text-center m-0 fs-6">{brand}</p>
                  <div className="container p-1 w-50 view-more-btn mt-2 shadow">
                    <a
                      href={`/product-detail/${_id}`}
                      target="_blank"
                      className="view-btn px-2">
                      View More
                    </a>
                  </div>
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
