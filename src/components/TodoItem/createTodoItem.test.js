import createTodoItem from './createTodoItem';

it('Should have a div as a main element', () => {
  const todoItem = createTodoItem();
  expect(todoItem.tagName).toBe('LI');
});
