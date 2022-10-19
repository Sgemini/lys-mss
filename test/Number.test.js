import Num from '../classes/Number';
jest.mock('../classes/Number');

const mockSum = jest.fn((...args) => args.reduce((a, b) => a + b, 0));
jest.mock('../classes/Number', () => {
  return jest.fn().mockImplementation(() => {
    return {sum: mockSum};
  });
});

beforeEach(() => {
  Num.mockClear();
  mockSum.mockClear();
});

it('The consumer should be able to call new() on SoundPlayer', () => {
  const num = new Num();
  // Ensure constructor created the object:
  expect(num).toBeTruthy();
});

it('We can check if the consumer called the class constructor', () => {
  new Num();
  expect(Num).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', () => {
  const num = new Num();
  num.sum(1,2,3);
  expect(mockSum.mock.calls[0][0]).toBe(1);
  expect(mockSum.mock.calls[0][1]).toBe(2);
  expect(mockSum.mock.calls[0][2]).toBe(3);
  expect(mockSum.mock.results[0].value).toBe(6);
});