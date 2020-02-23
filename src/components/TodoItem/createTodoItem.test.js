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
it('Should delete an item in the list', () => {
  const item13 = [{
    itemID: 13,
    itemName: 'organizer',
    itemStatus: false,
  }];
  const todolist = datamanager.get();
  expect(todolist.filter((i) => i.itemID === 13)).toStrictEqual(item13);
  datamanager.delete(13);
  const mutatedList = datamanager.get();
  expect(mutatedList.filter((i) => i.itemID === 13)).toStrictEqual([]);
});
