import React from 'react'
import './App.css';
import FilterableProductTable from './Components/FilterableProductTable';
import PRODUCTS from './data'


function App() {

  return (
    <FilterableProductTable products={PRODUCTS} />
  );
}

export default App;
