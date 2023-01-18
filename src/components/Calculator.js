import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    return (
      <section className="container-calculator">
        <h3 className="result">0</h3>
        <div className="buttons-calculator">
          <button onClick={this.handleClick} type="button" className="btn-calculator">AC</button>
          <button onClick={this.handleClick} type="button" className="btn-calculator">+/-</button>
          <button onClick={this.handleClick} type="button" className="btn-calculator">%</button>
          <button onClick={this.handleClick} type="button" className="btn-calculator color-right">÷</button>
          <button onClick={this.handleClick} type="button" className="btn-calculator">7</button>
          <button onClick={this.handleClick} type="button" className="btn-calculator">8</button>
          <button  onClick={this.handleClick} type="button" className="btn-calculator">9</button>
          <button onClick={this.handleClick} type="button" className="btn-calculator color-right">x</button>
          <button onClick={this.handleClick} type="button" className="btn-calculator">4</button>
          <button onClick={this.handleClick} type="button" className="btn-calculator">5</button>
          <button onClick={this.handleClick} type="button" className="btn-calculator">6</button>
          <button onClick={this.handleClick} type="button" className="btn-calculator color-right">-</button>
          <button onClick={this.handleClick} type="button" className="btn-calculator">1</button>
          <button onClick={this.handleClick} type="button" className="btn-calculator">2</button>
          <button onClick={this.handleClick} type="button" className="btn-calculator">3</button>
          <button onClick={this.handleClick} type="button" className="btn-calculator color-right">+</button>
          <button onClick={this.handleClick} type="button" className="btn-calculator zero">0</button>
          <button onClick={this.handleClick} type="button" className="btn-calculator">.</button>
          <button onClick={this.handleClick} type="button" className="btn-calculator color-right">=</button>
        </div>
      </section>
    );
  }
}

export default Calculator;
