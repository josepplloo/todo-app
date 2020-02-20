import createTitle from './createTitle';

it('should return an <h1 /> element', () => {
  const titleElement = createTitle();
  expect(titleElement.tagName).toBe('H1');
});

it('should have "todo" as title value', () => {
  const titleElement = createTitle();
  expect(titleElement.innerHTML).toBe('todos');
});
it('should have a styles and layout like the snapshot', () => {
  const titleElement = createTitle();
  expect(titleElement).toMatchSnapshot();
});
