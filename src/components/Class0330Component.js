import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CardGroup, Card, CardTitle, CardSubtitle, CardBody, CardText, CardLink } from 'reactstrap';
import peoples from './0330.js'


const contentHtml =
    peoples.map((people) => {
        return (
        <Card style={{width:'300px', float:'left', margin: '10px 20px'}}>
            <img
                alt="Card cap"
                src={people.photo}
                height="300px"
            />
            <CardBody>
            <CardTitle tag="h5">
                    {people.name}
                </CardTitle>
                <CardText dangerouslySetInnerHTML = {{ __html: people.description }}>
                </CardText>
                <CardLink href={people.link} target="_blank">
                    更多
                </CardLink>
            </CardBody>
        </Card>
        )
    })

class class0330 extends Component {
    render() {
        return(
            <div className='container'>
                { contentHtml }
            </div>
            
        )
    }

}
export default class0330;