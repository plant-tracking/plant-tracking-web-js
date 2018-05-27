import React, { Component } from 'react';

import PlantDiagram from './PlantDiagram';
import PlantStatusCard from './PlantStatusCard';

class PlantDashboard extends Component {

    render () {
        return (
            <div>
                <PlantStatusCard nickname={ this.props.nickname }
                                 genus={ this.props.genus }
                                 image={ this.props.image } />
                <h1><i className="mdi mdi-thermometer" aria-hidden="true"></i> Temperature</h1>
                <PlantDiagram type="temp"/>
                <h1><i className="mdi mdi-water" aria-hidden="true"></i> Ground Moisture</h1>
                <PlantDiagram type="groundmoisture"/>
                <h1><i className="mdi mdi-white-balance-sunny" aria-hidden="true"></i> Sun Exposure</h1>
                <PlantDiagram type="light"/>
            </div>
        );
    }
}

export default PlantDashboard;