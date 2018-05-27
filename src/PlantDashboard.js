import React, { Component } from 'react';

import PlantDiagram from './PlantDiagram';

class PlantDashboard extends Component {

    render () {
        return (
            <div>
                <h1>Temprature</h1>
                <PlantDiagram type="temp"/>
                <h1>Ground Moisture</h1>
                <PlantDiagram type="groundmoisture"/>
                <h1>Light Level</h1>
                <PlantDiagram type="light"/>
            </div>
        );
    }
}

export default PlantDashboard;