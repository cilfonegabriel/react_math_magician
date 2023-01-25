import calculate from '../logic/calculate';

let result = {
  total: '15',
  next: '4',
  operation: '+',
};

describe('Test calculator function buttons', () => {
  test("clicking 'AC' button should clear all values", () => {
    result = calculate(result, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });
  test("click the buttons 1 and 2 should make the number '12'", () => {
    result = calculate(result, '1');
    result = calculate(result, '2');
    expect(result.next).toEqual('12');
  });
  test("click operation button should move previous value to 'total', and store operation", () => {
    result = calculate(result, '+');
    expect(result).toEqual({ total: '12', next: null, operation: '+' });
  });
  test("click the buttons 3 and 5 should make the number '35'", () => {
    result = calculate(result, '3');
    result = calculate(result, '5');
    expect(result.next).toEqual('35');
  });
  test("clicking '=' button should make the sum operation", () => {
    result = calculate(result, '=');
    expect(result.total).toEqual('47');
  });
  test("clicking '+/-' should change the sign of the number", () => {
    result = calculate(result, '+/-');
    expect(result.total).toEqual('-47');
  });
});
