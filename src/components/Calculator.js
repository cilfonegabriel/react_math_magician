import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="container-calculator">
        <h3 className="result">0</h3>
        <div className="buttons-calculator">
          <button type="button" className="btn-calculator">AC</button>
          <button type="button" className="btn-calculator">+/-</button>
          <button type="button" className="btn-calculator">%</button>
          <button type="button" className="btn-calculator color-right">÷</button>
          <button type="button" className="btn-calculator">7</button>
          <button type="button" className="btn-calculator">8</button>
          <button type="button" className="btn-calculator">9</button>
          <button type="button" className="btn-calculator color-right">x</button>
          <button type="button" className="btn-calculator">4</button>
          <button type="button" className="btn-calculator">5</button>
          <button type="button" className="btn-calculator">6</button>
          <button type="button" className="btn-calculator color-right">-</button>
          <button type="button" className="btn-calculator">1</button>
          <button type="button" className="btn-calculator">2</button>
          <button type="button" className="btn-calculator">3</button>
          <button type="button" className="btn-calculator color-right">+</button>
          <button type="button" className="btn-calculator zero">0</button>
          <button type="button" className="btn-calculator">.</button>
          <button type="button" className="btn-calculator color-right">=</button>
        </div>
      </section>
    );
  }
}

export default Calculator;
