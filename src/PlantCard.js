import React, { Component } from 'react';

import plantimg from './images/Carla.png';

import './PlantCard.css';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class PlantCard extends Component {
    handleClick = () => { this.props.onClick(this.props.index); };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={ this.props.isActive ? 'active' : 'inactive' } onClick={ this.handleClick }>
                    <CardImg top width="200px" src={plantimg} />
                    <CardBody>
                        <CardTitle>{ this.props.nickname }</CardTitle>
                        <CardSubtitle>{ this.props.genus }</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default PlantCard;