import React, { Component } from 'react';

import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Class0330 from './Class0330Component';
import Class0526 from './Class0526component';

import About from './AboutComponent';
import Contact from './ContactComponent';

import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const HomePage = () => {
            return (
                <div>Home page.</div>
            )
        }
        return (
            <Router basename='/mit-fullstack'>
            <div className='App'>
                <Header></Header>
                    
                    
                        <Route path='/home' component={Home}></Route>
                        <Route path='/0330' component={Class0330}></Route>
                        <Route path='/0526' component={Class0526}></Route>
                        <Route path='/home' component={Home}></Route>

                        <Route path="/about" component={About}></Route>
                        {/* <Route path="/contactus" component={Contact}></Route> */}
                        {/* <Redirect to="/home"></Redirect> */}
                        
                   
  
                <Footer></Footer>
            </div>
            </Router>
        )
    }
}
export default Main;