import React from 'react'

function ProductList({product,addToCart}) {
  return (
    <div className='flex'>
        {
            product.map((productItem, productIndex)=>{
               return(
                <div style={{width:'33%'}}>
                   <div className='product-item'>
                     <img src={productItem.url} width="40%"/>
                     <p>{productItem.name} | {productItem.category}</p>
                     <p>{productItem.seller}</p>
                     <p>Rs. {productItem.price}/-</p>
                     <button
                     onClick={()=> addToCart(productItem)}
                     >Add to cart</button>
                   </div>
                </div>
               )      
            })
        }
    </div>
  )
}

export default ProductList