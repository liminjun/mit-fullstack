import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';



function Home(props) {
    return (
        <div className="container">
            <h2>麻省理工学院 xPro</h2>
            <p>麻省理工学院MIT xPRO在线学习课程，采用经世界知名专家验证过的内容，让您可以随时随地进行学习。MIT xPRO职业证书课程采用学习神经科学的最新研究成果，围绕应用程序，帮助专业开发人员打造强大的工作技能</p>
            <img src='/mit-fullstack/assets/images/highlight.png' style={{width:'100%'}}></img>
            
            <a href='https://executive-ed.xpro.mit.edu/professional-certificate-coding' target='_blank'><img src='/mit-fullstack/assets/images/fullstack.png' style={{width:'400px'}}></img></a>
        </div>
    );
}

export default Home;