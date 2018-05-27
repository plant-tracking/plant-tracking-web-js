import React, { Component } from 'react';
import './App.css';

import { Container, Row, Col } from 'reactstrap';

import PlantCard from './PlantCard';

class App extends Component {
  state = {
    activeIndex: null
  };

  handleClick = (index) => { this.setState({ activeIndex: index }); };

  render() {
    const plants = [
        { nickname: 'Carla', genus: 'Monsterra deliciosa' },
        { nickname: 'Patrick', genus: 'Dracaena fragrans' },
        { nickname: 'Julia', genus: 'Dracaena marginata' },
        { nickname: 'Tony', genus: 'Ficus Elastica' }
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
                                   index={ i }
                                   isActive={ this.state.activeIndex === i }
                                   onClick={ this.handleClick } />
                    </Col>
                );
            })}
              </Row>
            </Col>
            <Col xs="3">
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
