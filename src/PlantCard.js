import React, { Component } from 'react';

import './PlantCard.css';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class PlantCard extends Component {
    handleClick = () => { this.props.onClick(this.props.index); };

    render() {
        var statusAlertClasses = [];
        if (this.props.statusGroundmoisture != 1) {
            statusAlertClasses.push( "mdi mdi-water icon-active" );
        }
        if (this.props.statusLight != 1) {
            statusAlertClasses.push( "mdi mdi-white-balance-sunny icon-active" );
        }
        if (this.props.statusTemp != 1) {
            statusAlertClasses.push( "mdi mdi-thermometer icon-active" );
        }

        return (
            <div>
                <Card className={ this.props.isActive ? 'active' : 'inactive' } onClick={ this.handleClick }>
                    <CardImg top width="200px" src={ this.props.image } />
                    <CardBody>

                        { statusAlertClasses.map((statusAlertClass) => {
                            return (
                                <div className="status-alert-circle">
                                    <i className={ statusAlertClass } aria-hidden="true"></i>
                                </div>
                            );
                        })}

                        <CardTitle>{ this.props.nickname }</CardTitle>
                        <CardSubtitle className="plant-genus">{ this.props.genus }</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default PlantCard;