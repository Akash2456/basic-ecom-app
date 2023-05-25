import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';


function App() {
  const [product, setProduct] = useState([
    {
     url:'https://cdn.shopify.com/s/files/1/0607/6678/1671/products/FIRST_11G-787_L.GRY-BLK.jpg?v=1670326275&width=1073',
     name:'campus shoes',
     category:'shoes',
     seller:'shoe outlet',
     price:1999
    },
    {
      url:'https://m.media-amazon.com/images/I/617FFRO3vcL._SL1500_.jpg',
      name:'iphone 13',
      category:'mobile',
      seller:'Tata showroom GZB',
      price: 19999
    },
    {
      url:'https://m.media-amazon.com/images/I/71iICy1sSzL._UL1500_.jpg',
      name:'polo tshirt',
      category:'t-shirt',
      seller:'polo saket outlet',
      price: 1450
    },
    {
      url:'https://m.media-amazon.com/images/I/71mTopDXiRL._UL1500_.jpg',
      name:'comfort jeans',
      category:'unisex jeans',
      seller:'london countryclub',
      price:1199
    },
    {
      url:'https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg',
      name:'asus notebook',
      category:'laptop',
      seller:'asus duke mart',
      price: 35999
    },
    {
      url:'https://m.media-amazon.com/images/I/41J1kYfM6PL.jpg',
      name:'canon 360',
      category:'mobile',
      seller:'mega store mumbai plaza',
      price: 145000
    },
    {
      url:'https://m.media-amazon.com/images/I/71f+Iz89ozL._SL1500_.jpg',
      name:'magic keybord',
      category:'keyboard',
      seller:'croma world',
      price: 2000
    },
    {
      url:'https://m.media-amazon.com/images/I/713jIoMO3UL.jpg',
      name:'sapiens',
      category:'books',
      seller:'amazon book store',
      price:'600'
    }
  ])

  const [cart, setCart] = useState([])
  const [showCart,setShowCart] = useState(false)
  const addToCart =(data) =>{
       setCart([...cart,{...data ,quantity: 1}])
  }

  const handleShow = (value) =>{
    setShowCart(value)
  }

  return (
    <div>
      <Header count = {cart.length} 
        handleShow = {handleShow}></Header>
      
      {
        showCart ?
      <CartList cart={cart}></CartList> :
      <ProductList product ={product} addToCart={addToCart}></ProductList>
      }

    </div>
  );
}

export default App;
