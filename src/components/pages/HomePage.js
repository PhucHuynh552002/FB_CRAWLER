import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import aboutus from './About/about'
import check_cookies from './Cookies Check/check'
import scraper from './Google Scraper/scrap'
import search_post from './Facebook Search/search'
import myaccount from './My Account/account'

export default function HomePage() {
    return (
        <div>
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/home" component="HomePage" />
					<Route path="/about" component={aboutus} />
					<Route path="/check" component={check_cookies} />
					<Route path="/scrap" component={scraper} />
					<Route path="/account" component={myaccount} />
					<Route path="/search" component={ search_post } />
				</Switch>
			</Router>
		</>
            
            <div className="fixed-bottom">
                <a className="primary-button"  href="./">Log out</a>
            </div>	
        </div>

    )
}
