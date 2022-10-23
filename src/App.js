import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import aboutus from './components/pages/About/about'
import check_cookies from './components/pages/Cookies Check/check'
import scraper from './components/pages/Google Scraper/scrap'
import search_post from './components/pages/Facebook Search/search'
import myaccount from './components/pages/My Account/account'
import './App.css'
// window.location.reload();
export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/about" component={ aboutus } />
                    <Route path="/scrap" component={ scraper } />
                    <Route path="/check" component={ check_cookies } />
                    <Route path="/search" component={ search_post } />
                    <Route path="/account" component={ myaccount } />
                </Switch>

            </div>
        </Router>
    )
}
