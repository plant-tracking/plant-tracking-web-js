import React, { Component } from 'react';

import {Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts'
import axios from 'axios';

class PlantDiagram extends Component {
     state = {
         data: [],
         unit: ""
     };

    getData = () => {
        axios.get('https://planttra.uber.space/nodejs/api/1/graphData?type='+this.props.type)
            .then(res => {
                const data = res.data;
                if(res.data.length != 0) {
                    const unit = res.data[0].unit;
                    this.setState({ data })
                    this.setState({ unit })
                }
            })
    }

    render () {
        return (
            <LineChart width={400} height={120} margin={{top: 20, right: 0, bottom: 0, left: 20}} data={this.state.data}>
                <YAxis type="number" domain={['dataMin - 3', 'dataMax + 3']} unit={this.state.unit} />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <Tooltip />
                <XAxis/>
            </LineChart>
        );
    }
    componentDidMount(){
        this.interval = setInterval(this.getData,1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default PlantDiagram;