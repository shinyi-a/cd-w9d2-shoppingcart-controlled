import React, { useState } from 'react';
import './styles.css';
import AllTheThings from './Components/AllTheThings';
import MyShoppingCart from './Components/MyShoppingCart';
import Form from './Components/Form';
import productsArr from './products';

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart( [...cart, item] )
  };

  const removeFromCart = index => {
    const cartArr = cart.filter( (d,i) => i !== index )
    setCart(cartArr)
  };
  
  const handleSubmit = item => {
    setProducts([item, ...products])
  };

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <Form handleSubmit={handleSubmit}/>
      <div className="shoplist">
      <AllTheThings products={products} handleClick={addToCart} />
      <MyShoppingCart cart={cart} handleClick={removeFromCart} />
      </div>
    </div>
  );
}
