import React from 'react'
import './Cart.css';
const Cart = () => {
  return (
    <div className='cart1'>
        <div className='cart2'>
            <span className='span1'>Samosa</span><br />
            <span className='span1'>amount</span><br />
            <span className='span1'>$23</span>
        </div>
        <button className='btn2'>Close</button>
        <button className='btn3'>Order</button>
    </div>
  )
}

export default Cart