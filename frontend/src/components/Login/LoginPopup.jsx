import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopu = ({setShowLogin}) => {
  const [currState,setCurrState] = useState("Đăng nhập")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>

        <div className='login-popup-inputs'>
          {currState==="Đăng nhập"?<></>:<input type="text" placeholder='Tên của bạn' required />}
          <input type="email" placeholder='Email của bạn' required />
          <input type="password" placeholder='Mật Khẩu' required />
        </div>

        <button>{currState==="Đăng ký"?"Tạo tài khoản":"Đăng nhập"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>Bằng cách tiếp tục, tôi đồng ý với các điều khoản sử dụng và chính sách bảo mật.</p>
        </div>
        
        {currState==="Đăng nhập"
        ?<p>Tạo một tài khoản mới? <span onClick={()=>setCurrState("Đăng ký")}>Nhấp vào đây</span></p>
        :<p>Đã có tài khoản? <span onClick={()=>setCurrState("Đăng nhập")}>Đăng nhập tại đây</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopu