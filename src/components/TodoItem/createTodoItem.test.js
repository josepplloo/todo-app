import createTodoItem from './createTodoItem';

describe('Test for todo Item components', () => {
  it('Should have a div as a main element', () => {
    const todoItem = createTodoItem();
    expect(todoItem.tagName).toBe('DIV');
  });
});
