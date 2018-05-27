import React, { Component } from 'react';

import { Row, Col } from 'reactstrap';

import PlantDiagram from './PlantDiagram';
import PlantStatusCard from './PlantStatusCard';

class PlantDashboard extends Component {

    render () {
        return (
            <div>
                <PlantStatusCard nickname={ this.props.nickname }
                                 genus={ this.props.genus }
                                 image={ this.props.image }
                                 statusGroundmoisture = {this.props.statusGroundmoisture}
                                 statusLight = {this.props.statusLight}
                                 statusTemp = {this.props.statusTemp}/>

                <Row>
                    <Col xs="3">
                        <i className="mdi mdi-water" aria-hidden="true"></i> Ground Moisture
                    </Col>
                    <Col xs="9">
                        <PlantDiagram type="groundmoisture"/>
                    </Col>
                </Row>

                <Row>
                    <Col xs="3">
                        <i className="mdi mdi-white-balance-sunny" aria-hidden="true"></i> Sun Exposure
                    </Col>
                    <Col xs="9">
                        <PlantDiagram type="light"/>
                    </Col>
                </Row>

                <Row>
                    <Col xs="3">
                        <i className="mdi mdi-thermometer" aria-hidden="true"></i> Temperature
                    </Col>
                    <Col xs="9">
                        <PlantDiagram type="temp"/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PlantDashboard;