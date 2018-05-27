import React, { Component } from 'react';

import {Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts'
import axios from 'axios';

class PlantDiagram extends Component {
     state = {
         waterData: [] };

    getWaterData = () => {
        axios.get('https://planttra.uber.space/nodejs/api/1/graphData?type='+this.props.type)
            .then(res => {
                const waterData = res.data;
                this.setState({ waterData })
            })
    }

    render () {
        return (
            <LineChart width={400} height={200} data={this.state.waterData}>
                <YAxis type="number" domain={['dataMin - 3', 'dataMax + 3']} unit={this.state.unit} />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <Tooltip />
                <XAxis/>
                <YAxis />
            </LineChart>
        );
    }
    componentDidMount(){
        this.interval = setInterval(this.getWaterData,1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default PlantDiagram;