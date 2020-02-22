import createTodoItem from './createTodoItem';
import datamanager from '../../data';


it('Should have a div as a main element', () => {
  const todoItem = createTodoItem();
  expect(todoItem.tagName).toBe('LI');
});
it('Should have a div as a main element', () => {
  const todoItem = createTodoItem();
  expect(todoItem.tagName).toBe('LI');
});
it('Should delete an item in the list'), () => {
  const todolist = datamanager.get();
  mutateTodoList =  todolist.splice(todoItems.indexOf(todoItems.filter((item=12) => item.itemID === 12)), 1);

  expect(todoItem.tagName).toBe('LI');
});

