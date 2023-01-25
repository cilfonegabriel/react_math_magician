import operate from '../logic/operate';

describe('Test operate function:', () => {
  test("operator '+' sums 2 + 3 equals 5", () => {
    expect(operate('2', '3', '+')).toEqual('5');
  });
  test("operator '-' substract 2 - 3 equals -1", () => {
    expect(operate('2', '3', '-')).toEqual('-1');
  });
  test("operator 'x' multiply 2 x 3 equals 6", () => {
    expect(operate('2', '3', 'x')).toEqual('6');
  });
  test("operator '÷' divides 5 ÷ 2 equals 2.5", () => {
    expect(operate('5', '2', '÷')).toEqual('2.5');
  });
  test("operator '%' returns remainder of 5 ÷ 2 equals 1", () => {
    expect(operate('5', '2', '%')).toEqual('1');
  });
  test('Any other operator should throw an error', () => {
    expect(() => operate('5', '2', '&')).toThrow();
  });
  test('return a message if try to divide by zero', () => {
    expect(operate('12', '0', '÷')).toEqual('Can\'t divide by 0.');
  });
  test('return error message module container zero', () => {
    expect(operate('12', '0', '%')).toEqual("Can't find modulo as can't divide by 0.");
  });
});
