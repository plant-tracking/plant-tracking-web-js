import React, { Component } from 'react';
import './App.css';

import { Container, Row, Col } from 'reactstrap';

import PlantCard from './PlantCard';
import PlantDashboard from './PlantDashboard';

import carlaImg from './images/Carla.png';
import patrickImg from './images/Patrick.png';
import juliaImg from './images/Julia.png';
import tonyImg from './images/Tony.jpg';

import plus from './images/plus.svg';
import axios from "axios/index";

class App extends Component {
    state = {
        activeIndex: null,
        plants: [
            {
                nickname: 'Carla',
                genus: 'Monsterra deliciosa',
                image: carlaImg,
                statusGroundmoisture: 0,
                statusLight: 1,
                statusTemp: 1
            },
            {
                nickname: 'Patrick',
                genus: 'Dracaena fragrans',
                image: patrickImg,
                statusGroundmoisture: 1,
                statusLight: 1,
                statusTemp: 1
            },
            {
                nickname: 'Julia',
                genus: 'Dracaena marginata',
                image: juliaImg,
                statusGroundmoisture: 1,
                statusLight: 0,
                statusTemp: 1
            },
            {
                nickname: 'Tony',
                genus: 'Ficus Elastica',
                image: tonyImg,
                statusGroundmoisture: 1,
                statusLight: 1,
                statusTemp: 1
            }
        ]
    };

    componentDidMount(){
        this.interval = setInterval(this.getStatus,1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getStatus = () => {
        axios.get('https://planttra.uber.space/nodejs/api/1/status')
            .then(res => {
                const status = res.data;
                if(status != null){
                    var i;
                    for (i = 0; i < status.length; i++) {
                        const ref = status[i][0];
                        if(ref.type == 'groundmoisture'){
                            this.state.plants[0].statusGroundmoisture = ref.statusLevel
                        }
                        else if(ref.type == 'temp'){
                            this.state.plants[0].statusTemp = ref.statusLevel
                        }
                        else if(ref.type == 'light'){
                            this.state.plants[0].statusLight = ref.statusLevel
                        }
                    }
                    }
            })
    };


    handleClick = (index) => { this.setState({ activeIndex: index }); };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Plant Tracker</h1>
                </header>


                <Container>
                    <Row>
                        <Col xs={{ size: 6, offset: this.state.activeIndex === null ? 3 : 0 }} >
                            <Row>
                                { this.state.plants.map((plant, i) => {
                                    return (
                                        <Col xs="4">
                                            <PlantCard key={ plant.nickname }
                                                       nickname={ plant.nickname }
                                                       genus={ plant.genus }
                                                       image={ plant.image }
                                                       index={ i }
                                                       isActive={ this.state.activeIndex === i }
                                                       onClick={ this.handleClick } />
                                        </Col>
                                    );
                                })}
                                <div className='plus'>
                                    <img className='imgPlus' src={plus}/>
                                    <p>add plant</p>
                                </div>
                            </Row>
                        </Col>
                        <Col xs="6" className={ this.state.activeIndex === null ? 'd-none' : '' } >
                            {this.state.activeIndex !== null &&
                                <PlantDashboard nickname={this.state.plants[this.state.activeIndex].nickname}
                                                genus={this.state.plants[this.state.activeIndex].genus}
                                                image={this.state.plants[this.state.activeIndex].image}
                                                statusGroundmoisture={this.state.plants[this.state.activeIndex].statusGroundmoisture}
                                                statusLight={this.state.plants[this.state.activeIndex].statusLight}
                                                statusTemp={this.state.plants[this.state.activeIndex].statusTemp}/>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

class PlantList extends Component {
    render() {
        return <div></div>
    }
}

export default App;
