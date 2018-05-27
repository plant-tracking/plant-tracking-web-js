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
                    <CardBody>
                        <CardTitle className="plant-status-card-title">{ this.props.nickname }</CardTitle>
                        <CardSubtitle>{ this.props.genus }</CardSubtitle>
                    </CardBody>
                </Col>
            </Row>
        );
    }
}

export default PlantStatusCard;