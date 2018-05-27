import React, { Component } from 'react';
import './App.css';

import plantimg from './images/Carla.png';

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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

        { plants.map((plant, i) => {
            return <PlantCard key={ plant.nickname }
                              nickname={ plant.nickname }
                              genus={ plant.genus }
                              index={ i }
                              isActive={ this.state.activeIndex === i }
                              onClick={ this.handleClick } />
        })}
      </div>
    );
  }
}

class PlantList extends Component {
    render() {
        return <div></div>
    }
}

class PlantCard extends Component {
    handleClick = () => { this.props.onClick(this.props.index); };

    render() {
        return (
            <Card className={ this.props.isActive ? 'active' : 'test' } onClick={ this.handleClick }>
                <CardMedia image=" ">
                    <img
                        src={plantimg}
                        title="Plant Image"
                        width={191}
                        height={157}
                    />
                </CardMedia>
                <CardContent>
                    <Typography className="nickname">{ this.props.nickname }</Typography>
                    <Typography className="genus">{ this.props.genus }</Typography>
                </CardContent>
            </Card>
        )
    }
}

export default App;
