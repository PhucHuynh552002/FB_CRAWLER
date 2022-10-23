import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../../../App.css'
// import Navbar from "../Navbar/Navbar"
import BackgroundImage from '../../../assets/images/br.jpg'

export default function check_cookies() {
    return (        
     
    <header style={ HeaderStyle }>

<div class="text-left">
              <div class="mb-3 mb-lg-0">
                  <h2>Kiểm Tra Facebook Cookie</h2>
                  <p class="mb-0">Kiểm tra cookie đang sử dụng còn hợp lệ hay không.</p>
          </div>
      </div>

      <div class="card border-light ">
            <div class="card-body">
                <div class="row">
                    <div class="col-xl-4">
                        <div>
                            <label for="text">Nhập cookies</label>
                            <input type="text" class="form-control" id="search_keyword" placeholder="Nhập cookie cần check" aria-describedby="textHelp"></input>
                        </div>
                    </div>                    
                </div>
                <div class="col-xl-2-2">
                        <button class="confirm-button" type="button">Confirm</button>
                    </div>
            </div>
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


    