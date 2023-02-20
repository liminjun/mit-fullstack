import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardLink } from 'reactstrap';

const projectsData = [
    {name:'PacMen练习', description:'通过释放不同个数吃豆小人，在页面上来回进行动画渲染', photo:'/mit-fullstack/assets/portfolio/PacMan.png', github_url:'', score:''},
    {name:'眼球移动练习', description:'通过释放不同个数吃豆小人，在页面上来回进行动画渲染', photo:'/mit-fullstack/assets/portfolio/Eyes.png',github_url:'', score:''},
    {name:'巴士实时追踪器练习', description:'通过释放不同个数吃豆小人，在页面上来回进行动画渲染', photo:'/mit-fullstack/assets/portfolio/Map.png',github_url:'', score:''}
];
const showProjects = projectsData.map((projectItem)=>{
    return (
        <Card style={{width:'300px', float:'left', margin: '10px 20px'}}>
            <img
                alt="Card cap"
                src={projectItem.photo}
                height="300px"
            />
            <CardBody>
            <CardTitle tag="h5">
                    {projectItem.name}
                </CardTitle>
                <CardText dangerouslySetInnerHTML = {{ __html: projectItem.description }}>
                </CardText>
                <CardLink href={projectItem.github_url} target="_blank">
                    查看源代码
                </CardLink>
            </CardBody>
        </Card>
    )
})

function Portfolio(props) {
    return (
        <div className="container">
            { showProjects}
        </div>
    );
}

export default Portfolio;