import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../../../App.css'
// import Navbar from "../Navbar/Navbar"
import BackgroundImage from '../../../assets/images/br.jpg'

export default function scraper() {
    return (        
     
        <header style={ HeaderStyle }>
      <div>
          <div class="text-left">
              <div class="mb-3 mb-lg-0">
                  <h2 >Google Scrapers</h2>
                  <p>Nhập từ khóa tìm kiếm và lấy toàn bộ tiêu đề cùng đường dẫn trang liên kết tùy theo số trang cần quét.</p>
              </div>
          </div>
      </div>
      <div class="card border-light ">
            <div class="card-body">
                <div class="row">
                    <div class="col-xl-4">
                        <div>
                            <label for="text">Từ Khóa</label>
                            <input type="text" class="form-control" id="search_keyword" placeholder="Ví dụ: Bách Khoa Hồ Chí Minh" aria-describedby="textHelp"></input>
                            <small id="textHelp" class="form-text text-muted">Nhập từ khóa về nội dung liên quan cần quét.</small>
                        </div>
                    </div>
                    <div class="col-xl-2">
                        <div class="mb-4">
                            <label for="number">Số Trang</label>
                            <input type="number" class="form-control" id="end_page" placeholder="Ví dụ: 5" aria-describedby="textHelp"></input>
                            <small id="numberHelp" class="form-text text-muted">Nhập số trang cần quét.</small>
                        </div>
                    </div>
                    <div class="col-xl-2-2">
                        <button class="confirm-button" type="button">Confirm</button>
                </div>
                </div>
            </div>
      </div>


      <div class="card">
          <div class="card-body">
              <div class="table-responsive">
                <table class="table1">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Số Thứ Tự</th>
                            <th>Từ Khóa</th>
                            <th>Tiêu Đề</th>
                            <th>Đường Liên Kết</th>
                            <th>Thời Gian</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Số Thứ Tự</th>
                            <th>Từ Khóa</th>
                            <th>Tiêu Đề</th>
                            <th>Đường Liên Kết</th>
                            <th>Thời Gian</th>
                        </tr>
                    </tfoot>
                </table>
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


    