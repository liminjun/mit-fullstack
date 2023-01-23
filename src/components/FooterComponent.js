import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="footer" style={{clear:'both'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4 offset-1 col-sm-2">
                            <h5>友情链接</h5>
                            <ul className="list-unstyled">
                                <li>
                                <a target='_blank' href="https://emeritus.org.cn/">易睿拓思</a>
                                </li>
                                <li><a target='_blank' href='https://emeritus.org.cn/universities/2e3f16f337584b8b8f2348b292a92614'>麻省理工学院 xPro</a></li>
                                <li>
                                    <a target='_blank' href='https://github.com/liminjun/mit-full-stack'>GitHub仓库</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-7 col-sm-5">
                            <h5>助教信息</h5>
                            <address>
                                江苏省苏州市<br />
                                <i className="fa fa-phone fa-lg"></i>18896724808<br />
                              
                                <i className="fa fa-envelope fa-lg"></i><a href="mailto:v-leeli@hotmail.com">
                                v-leeli@hotmail.com</a>
                            </address>
                        </div>
                 
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <p>© Copyright 2022-{(new Date()).getFullYear()} Full Stack Developer.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default Footer;