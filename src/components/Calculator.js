import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  const { total, next, operation } = state;
  return (
    <section className="containerCalculator">
      <div className="pMath"> Let&apos;s Do Some Math </div>
      <div className="calculatorDiv">
        <div className="result">
          {total}
          {operation}
          {next}
        </div>
        <div className="buttons-calculator">
          <button onClick={handleClick} type="button" className="btn-calculator">AC</button>
          <button onClick={handleClick} type="button" className="btn-calculator">+/-</button>
          <button onClick={handleClick} type="button" className="btn-calculator">%</button>
          <button onClick={handleClick} type="button" className="btn-calculator color-right">÷</button>
          <button onClick={handleClick} type="button" className="btn-calculator">7</button>
          <button onClick={handleClick} type="button" className="btn-calculator">8</button>
          <button onClick={handleClick} type="button" className="btn-calculator">9</button>
          <button onClick={handleClick} type="button" className="btn-calculator color-right">x</button>
          <button onClick={handleClick} type="button" className="btn-calculator">4</button>
          <button onClick={handleClick} type="button" className="btn-calculator">5</button>
          <button onClick={handleClick} type="button" className="btn-calculator">6</button>
          <button onClick={handleClick} type="button" className="btn-calculator color-right">-</button>
          <button onClick={handleClick} type="button" className="btn-calculator">1</button>
          <button onClick={handleClick} type="button" className="btn-calculator">2</button>
          <button onClick={handleClick} type="button" className="btn-calculator">3</button>
          <button onClick={handleClick} type="button" className="btn-calculator color-right">+</button>
          <button onClick={handleClick} type="button" className="btn-calculator zero">0</button>
          <button onClick={handleClick} type="button" className="btn-calculator">.</button>
          <button onClick={handleClick} type="button" className="btn-calculator color-right">=</button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
