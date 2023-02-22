import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardLink } from 'reactstrap';

const projectsData = [
    { name: '首页', description: '显示欢迎信息和银行logo', photo: '/mit-fullstack/assets/bank1/bank1.png' },
    { name: '开户', description: '模拟开户，并且默认存入0美金', photo: '/mit-fullstack/assets/bank1/bank2.png' },
    { name: '存钱', description: '模拟存钱过程，需要用户先通过用户名和密码登录，自动计算用户的余额', photo: '/mit-fullstack/assets/bank1/bank3.png' },
    { name: '取钱', description: '模拟取钱过程，需要用户先通过用户名和密码登录，自动计算用户的余额', photo: '/mit-fullstack/assets/bank1/bank4.png' }

];
const showProjects = projectsData.map((projectItem) => {
    return (
        <Card style={{ width: '300px', float: 'left', margin: '10px 20px' }}>
            <img
                alt="Card cap"
                src={projectItem.photo}
                height="300px"
            />
            <CardBody>
                <CardTitle tag="h5">
                    {projectItem.name}
                </CardTitle>
                <CardText dangerouslySetInnerHTML={{ __html: projectItem.description }}>
                </CardText>

            </CardBody>
        </Card>
    )
})

function Bankapp1(props) {
    return (
        <div className="container">
            <div className="row">
            {showProjects}
            <Card style={{ width: '600px', float: 'left', margin: '10px 20px' }}>
                <img
                    alt="Card cap"
                    src={'/mit-fullstack/assets/bank1/bank5.png'}
                    height="300px"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        全部数据展示
                    </CardTitle>
                    <CardText>
                        显示所有用户信息，包括账号，姓名，余额
                    </CardText>
                </CardBody>
            </Card>
            </div>
            <div className='row'>
            <a target={'_blank'} href="https://liminjun.github.io/bankapp" class="btn btn-default" tabindex="1" role="button">演示预览</a>

            <a target={'_blank'} href="https://github.com/liminjun/bankapp" class="btn btn-primary" tabindex="2" role="button">查看源代码</a>
            </div>
        </div>
    );
}

export default Bankapp1;