import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./ProductDetail.css"
import axios from 'axios';

function ProductDetail() {
  const [product, setProduct] = useState({})

  const { id } = useParams();

  const loadProduct = async () =>{
    const response = await axios.get(`/product/${id}`)
    setProduct(response?.data?.data)
  }

  useEffect(()=>{
   loadProduct();
  })

  return (<>
    <h1 className='text-center'>ProductDetail</h1>
    <h5 className='text-center mt-2'>Product ID {id}</h5>
    <div className=' shadow d-flex justify-content-evenly align-items-center '>
      <div>
      <img src={product?.productImage} style={{width:"300px"}}/>
      </div>
<div>
      <p>{product?.name}</p>
      <p>{product?.price}</p>
      <p>{product?.description}</p>
      <p>{product?.brand}</p>
</div>

    </div>
  </>

  )
}

export default ProductDetail