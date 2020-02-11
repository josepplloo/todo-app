import createTitle from './createTitle';

describe('test for Title component', () => {
  it('should return an <h1 /> element', () => {
    const titleElement = createTitle();
    expect(titleElement.tagName).toBe('H1');
  });

  it('should have "todo" as title value', () => {
    const titleElement = createTitle();
    expect(titleElement.innerHTML).toBe('todos');
  });
  it('should be like the snaptshot', () => {
    const titleElement = createTitle();
    expect(titleElement).toMatchSnapshot();
  });
});
