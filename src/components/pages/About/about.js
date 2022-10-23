import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../../../App.css'
// import Navbar from "../Navbar/Navbar"
import BackgroundImage from '../../../assets/images/bg.jpg'


export default function aboutus() {
    return (        
     
        <header style={ HeaderStyle }>

            <h1 className="main-title text-center">ABOUT US</h1>
            <p className="main-para text-center">Team members</p>
            <div className="buttons text-center">   
            <hr></hr><hr></hr><hr></hr><hr></hr><hr></hr>         
            <a className="primary-button"  href="https://www.facebook.com/profile.php?id=100010061047872">Huỳnh Thanh Phúc</a>
            <a className="primary-button" id="reg_btn" href="https://www.facebook.com/tungthanh1010">Huỳnh Thanh Tùng</a>
            <a className="primary-button" id="reg_btn" href="https://www.facebook.com/penhox.kutee">Nguyễn Lê Gia Khánh</a>
            <a className="primary-button" id="reg_btn" href="https://www.facebook.com/tuan.nguyen.bi136">Nguyễn Đức Tuấn</a>
            <a className="primary-button" id="reg_btn" href="https://www.facebook.com/huycanf.duong">Dương Ngọc Quang Huy</a>
            </div>
            
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

  
