import './App.css'
import products from './components/products.json'
import Product from './components/Product';
import styled from 'styled-components';
import { Component } from 'react';
function App() {
  return (
    <AppFrame className="App">
      {products.map((product,index) => (
        <Product product={product} key={index}></Product>
      ))}
    </AppFrame>
  );
}
const AppFrame = styled.div`
 text-align : center;
 display :flex;`

export default App;
