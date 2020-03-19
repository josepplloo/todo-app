import createInput from './createInput';

it('should return an <input /> element', () => {
  const inputElement = createInput();
  expect(inputElement.tagName).toBe('INPUT');
});

it('should have a styles and layout like the snapshot', () => {
  const inputElement = createInput();
  expect(inputElement).toMatchSnapshot();
});

it('should submit a value on enter', () => {
  const inputElement = createInput();
  const INPUT_TEXT = 'Test todo item';
  const data = inputElement.handleInput(INPUT_TEXT);
  expect(data?.itemName).toBe(INPUT_TEXT);
  expect(data?.itemStatus).toBe(false);
});
