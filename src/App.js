import React, { Component } from 'react';
import Form from './Form';
import Gerenciamentos from './Gerenciamentos';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entrada: 2,
      moeda: "R$",
      entradas: 3,
      payout: 87
    }

    this.handleCalcSubmit = this.handleCalcSubmit.bind(this);
  }
  
  handleCalcSubmit(config) {
    this.setState(config);
  }

  render () {
    return (
      <article className="App">
        <div className="sidebar">
          <h1>Calculadora Opções Binárias</h1>
          <Form onCalcSubmit={this.handleCalcSubmit} config={this.state} />
        </div>
        <Gerenciamentos config={this.state} />
      </article>
    );
  }
}


export default App;
