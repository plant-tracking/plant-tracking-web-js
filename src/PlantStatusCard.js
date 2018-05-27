import React, { Component } from 'react';

import { Row, Col, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class PlantStatusCard extends Component {

    render() {
        return (
            <Row>
                <Col xs="4">
                    <div className="plant-status-card-image" style={{backgroundImage: 'url(' + this.props.image + ')'}}></div>
                </Col>
                <Col xs="8">
                    <CardBody className="plant-status-card-text">
                        <CardTitle className="plant-status-card-title">{ this.props.nickname }</CardTitle>
                        <CardSubtitle>{ this.props.genus }</CardSubtitle>

                        <div className="plant-status-lines">
                            <PlantStatusLine statusType="groundmoisture" statusLevel={this.props.statusGroundmoisture} ></PlantStatusLine>
                            <PlantStatusLine statusType="light" statusLevel={this.props.statusLight}></PlantStatusLine>
                            <PlantStatusLine statusType="temp" statusLevel={this.props.statusTemp}></PlantStatusLine>
                        </div>
                    </CardBody>
                </Col>
            </Row>
        );
    }
}

class PlantStatusLine extends Component {

    render() {
        const readableValueMapping = {
            'temp': [
                'It\'s too cold for me!',
                'It’s nice and warm for me.',
                'It\'s too warm for me!',
            ],
            'light': [
                'I\'d like to have more sun!',
                'I have enough sun.',
                'There is too much sun for me!',
            ],
            'groundmoisture': [
                'Water me soon!',
                'I have enough water.',
                'Please let me dry a little!',
            ]
        };

        var iconClass;
        var statusText = readableValueMapping[this.props.statusType][this.props.statusLevel];

        switch (this.props.statusType) {
            case 'temp':
                iconClass = "mdi mdi-thermometer";
                break;
            case 'light':
                iconClass = "mdi mdi-white-balance-sunny";
                break;
            case 'groundmoisture':
                iconClass = "mdi mdi-water";
                break;
        }

        return (
            <div className="plant-status-line">
                <i className={ iconClass } aria-hidden="true"></i> { statusText }
            </div>
        );
    };
}

export default PlantStatusCard;