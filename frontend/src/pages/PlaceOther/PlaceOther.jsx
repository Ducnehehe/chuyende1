import React, { useContext } from 'react'
import './PlaceOther.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOther = () => {

  const {getTotalCartAmount} = useContext (StoreContext);

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name'/>
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className='cart-total'>
          <h2>Tổng số giỏ hàng</h2>
          <div>
            <div className="cart-total-details">
              <p>Tổng cộng</p>
              <p>{getTotalCartAmount()}VND</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Giao hàng</p>
              <p>{getTotalCartAmount()===0?0:2}VND</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Tổng cộng</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+2}VND</b>
            </div>
          </div>
          <button>Thanh toán</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOther