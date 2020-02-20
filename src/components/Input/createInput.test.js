import createInput from './createInput';

it('should return an <input /> element', () => {
  const inputElement = createInput();
  expect(inputElement.tagName).toBe('INPUT');
});

it('should have a styles and layout like the snapshot', () => {
  const inputElement = createInput();
  expect(inputElement).toMatchSnapshot();
});

