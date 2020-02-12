import createInput from './createInput';

describe('test for Input component', () => {
  it('should return an <input /> element', () => {
    const inputElement = createInput();
    expect(inputElement.tagName).toBe('INPUT');
  });

  it('should be like the snaptshot', () => {
    const inputElement = createInput();
    expect(inputElement).toMatchSnapshot();
  });
});
