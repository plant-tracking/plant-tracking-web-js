import React, { Component } from 'react';

import { Row, Col, Button } from 'reactstrap';

import PlantDiagram from './PlantDiagram';
import PlantStatusCard from './PlantStatusCard';

class PlantDashboard extends Component {
    render () {
        const readableValueMapping = {
            'temp': [
                'cold',
                'warm',
                'hot',
            ],
            'light': [
                'dark',
                'moderate',
                'bright',
            ],
            'groundmoisture': [
                'dry',
                'moderate',
                'wet',
            ]
        };

        return (
            <div>
                <h1 className="room-title">&nbsp;</h1>
                <PlantStatusCard nickname={ this.props.nickname }
                                 genus={ this.props.genus }
                                 image={ this.props.image }
                                 statusGroundmoisture = {this.props.statusGroundmoisture}
                                 statusLight = {this.props.statusLight}
                                 statusTemp = {this.props.statusTemp}/>

                <Button outline color="secondary" className={ this.props.diagramShowed !== undefined ? 'show-data-button component-hidden' : 'show-data-button component-showed' } onClick={ this.props.showDiagram }>Show data</Button>

                <div id="diagram" className={ this.props.diagramShowed !== undefined ? 'component-showed' : 'component-hidden' } >
                    <Row>
                        <Col xs="3" className="diagram-legend">
                            <i className="mdi mdi-water" aria-hidden="true"></i>
                            <div>
                                { readableValueMapping.groundmoisture[this.props.statusGroundmoisture] }
                            </div>
                        </Col>
                        <Col xs="9">
                            <PlantDiagram type="groundmoisture"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="3" className="diagram-legend">
                            <i className="mdi mdi-white-balance-sunny" aria-hidden="true"></i>
                            <div>
                                { readableValueMapping.light[this.props.statusLight] }
                            </div>
                        </Col>
                        <Col xs="9">
                            <PlantDiagram type="light"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="3" className="diagram-legend">
                            <i className="mdi mdi-thermometer" aria-hidden="true"></i>
                            <div>
                                { readableValueMapping.temp[this.props.statusTemp] }
                            </div>
                        </Col>
                        <Col xs="9">
                            <PlantDiagram type="temp"/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default PlantDashboard;