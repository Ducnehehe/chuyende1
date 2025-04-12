import React, { useContext, useState } from 'react'
import './PlaceOther.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOther = () => {

  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext (StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]: value}));
}
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Thông tin giao hàng</p>
        <div className="multi-fields">
          <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='Tên đầu tiên' />
          <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Họ'/>
        </div>
        <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Địa chỉ email'/>
        <input type="text" placeholder='Đường phố'/>
        <div className="multi-fields">
          <input type="text" placeholder='Thành phố' />
          <input type="text" placeholder='Tình trạng'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Mã bưu chính' />
          <input type="text" placeholder='Quốc gia'/>
        </div>
        <input type="text" placeholder='Điện thoại' />
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