import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    activeIndex: null
  };

  handleClick = (index) => { this.setState({ activeIndex: index }); };

  render() {
    const plants = [
        { name: 'Carla' },
        { name: 'Patrick' },
        { name: 'Julia' },
        { name: 'Tony' }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Plant Tracker</h1>
        </header>


            <PlantCard name="Carla" index={0} isActive={ this.state.activeIndex===0 } onClick={ this.handleClick } />
            <PlantCard name="Patrick" index={1} isActive={ this.state.activeIndex===1 } onClick={ this.handleClick }/>
            <PlantCard name="Julia" index={2} isActive={ this.state.activeIndex===2 } onClick={ this.handleClick }/>

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
        return <div className={ this.props.isActive ? 'active' : 'test' } onClick={ this.handleClick }>
            <span>{ this.props.name }</span>
        </div>
    }
}

export default App;
