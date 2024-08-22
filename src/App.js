// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ProductList from './components/ProductList';
import CreateProduct from './components/CreateProduct';
// import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div>
      <ProductList />
      <CreateProduct />
      {/* Add UpdateProduct component as needed */}
      {/* <UpdateProduct /> */}
    </div>
  );
}

export default App;