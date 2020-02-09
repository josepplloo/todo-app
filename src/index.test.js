import sum from './index';

describe('sample testing', () => {
  it('should return a sum between 3 & 5', () => {
    expect(sum(3, 5)).toBe(8);
  });
});
