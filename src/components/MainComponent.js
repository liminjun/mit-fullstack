import React, { Component } from 'react';

import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Class0330 from './Class0330Component';
import Class0526 from './Class0526component';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

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
            <div className='App'>
                <Header></Header>
                <Switch location={this.props.location}>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/0330' component={Class0330}></Route>
                    <Route path='/0526' component={Class0526}></Route>
                    <Route path='/home' component={Home}></Route>

                    <Redirect to="/home"></Redirect>
                </Switch>
                <Footer></Footer>
            </div>
        )
    }
}
export default Main;