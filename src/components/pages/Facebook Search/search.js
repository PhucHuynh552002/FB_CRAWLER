import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../../../App.css'
// import Navbar from "../Navbar/Navbar"
import BackgroundImage from '../../../assets/images/br.jpg'

export default function search_post() {
    return (        
     
    <header style={ HeaderStyle }>

    <div class="text-left">
              <div class="mb-3 mb-lg-0">
                  <h2>Facebook Post Scraper</h2>
                  <p class="mb-0">Nhập danh sách nhóm facebook cần quét và lấy toàn bộ thông tin bài viết.</p>
              </div>
      </div>

      <div class="card border-light">
            <div class="card-body">
                <div class="row">
                    <div class="col-xl-4">
                        <div class="mb-4">
                            <label for="text">Danh Sách</label>
                            <textarea class="form-control" placeholder="Ví dụ (Mỗi link cách nhau bằng dấu phẩy):&#10;https://m.facebook.com/groups/1065116420221723,https://m.facebook.com/groups/mogivietnam/" id="group_list" rows="4"></textarea>
                            <small id="textHelp" class="form-text text-muted">Nhập danh sách nhóm facebook cần quét.</small>
                        </div>
                    </div>
                    <div class="col-xl-2">
                        <div class="mb-4">
                            <label for="number">Số Lượng Scroll</label>
                            <input type="number" class="form-control" id="scrolls" placeholder="Ví dụ: 2" aria-describedby="textHelp"></input>
                            <small id="numberHelp" class="form-text text-muted">Nhập số lượng Scroll.</small>
                        </div>
                    </div>
                    <div class="col-xl-2-2">
                        <button class="confirm-button" type="button">Quét Dữ Liệu</button>
                    </div>
                </div>
            </div>
      </div>
      

        <div class="card border-light shadow-sm mb-4">
            <div class="post">
                <h4>Posts With Most Reactions</h4>
                <div class="likes-chart"></div>      
                <h4 >Posts With Most Comments</h4>
                <div class="comments-chart"></div>
            </div>
        </div>
   
        <div class="card border-light">
          <div class="card-body">
              <div class="table-responsive" id="table-wrapper">
                <h5>Posts</h5>
                <table class="table1">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Số Thứ Tự</th>
                            <th>ID Nhóm Facebook</th>
                            <th>ID Bài Đăng</th>
                            <th>ID Người Đăng</th>
                            <th>Nội Dung</th>
                            <th>Ảnh Liên Kết</th>
                            <th>Chú Thích</th>
                            <th>Số Lươt Thích</th>
                            <th>Số Bình Luận</th>
                            <th>Số Lươt Chia Sẻ</th>
                            <th>Thời Gian Đăng</th>
                            <th>Ngày Khởi Tạo</th>
                            <th>Ngày Cập Nhật</th>
                        </tr>
                    </thead>
                </table>
              </div>
          </div>
      </div>

      <br></br>

      <div class="card border-light shadow-sm">
        <div class="card-body">
            <div class="table-responsive" id="table-wrapper">
                <h5>Users</h5>
              <table class="table1">
                  <thead>
                      <tr>
                          <th></th>
                          <th></th>
                          <th>Số Thứ Tự</th>
                          <th>ID Người Dùng</th>
                          <th>ID Nhóm Facebook</th>
                          
                          <th>Tên Người Dùng</th>
                          <th>Công Việc</th>
                          <th>Học Vấn</th>
                          <th>Số Bạn</th>
                          <th>Số Follower</th>
                          <th>Số Người Đang Theo Dõi</th>
                          <th>Ngày Khởi Tạo</th>
                          <th>Ngày Cập Nhật</th>
                      </tr>
                  </thead>
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


    