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

class App extends Component {
    state = {
        activeIndex: null
    };

    handleClick = (index) => { this.setState({ activeIndex: index }); };

    render() {
        const plants = [
            { nickname: 'Carla', genus: 'Monsterra deliciosa', image: carlaImg },
            { nickname: 'Patrick', genus: 'Dracaena fragrans', image: patrickImg },
            { nickname: 'Julia', genus: 'Dracaena marginata', image: juliaImg },
            { nickname: 'Tony', genus: 'Ficus Elastica', image: tonyImg }
        ];

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Plant Tracker</h1>
                </header>


                <Container>
                    <Row>
                        <Col xs={{ size: 6, offset: this.state.activeIndex === null ? 3 : 0 }} >
                            <Row>
                                { plants.map((plant, i) => {
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
                            { this.state.activeIndex !== null ? plants[this.state.activeIndex].nickname : '' }
                            <PlantDashboard />
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
