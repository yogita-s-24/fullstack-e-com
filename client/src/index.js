import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
// import '/bootstrap/dist/css/bootstrap.css';
// import '/bootstrap/dist/js/bootstrap.bundle';
import AddStudent from './views/AddProduct/AddProduct'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <Home/>
   <AddStudent/>
  </>
);


