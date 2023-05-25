import React from 'react'

function Header(props) {
  return (
    <div className='flex shopping-card'>
        <div onClick={()=> props.handleShow(false)}>shopping cart App</div>
        <div onClick={()=> props.handleShow(true)}>
            cart
            <sup>{props.count}</sup>
        </div>
    </div>
  )
}

export default Header