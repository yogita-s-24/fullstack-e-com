import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//axios

//components
import Home from './views/Home/Home';
import AddProduct from './views/AddProduct/AddProduct';
import ProductDetail from './views/ProductDetail/ProductDetail';

//routing
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  },
  {
    path : '/add-product',
    element : <AddProduct/>
  },
  {
    path : '/product/:_id',
    element : <ProductDetail/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router}/>);


