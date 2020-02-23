import createTodoItem from './createTodoItem';
import datamanager from '../../data';

const todolist = datamanager.get();

it('Should have a div as a main element', () => {
  const todoItem = createTodoItem();
  expect(todoItem.tagName).toBe('LI');
});
it('Should have a div as a main element', () => {
  const todoItem = createTodoItem();
  expect(todoItem.tagName).toBe('LI');
});
it('Should toggle an item status in the list', () => {
  const itemFalse = [{
    itemID: 13,
    itemName: 'organizer',
    itemStatus: false,
  }];
  const itemTrue = [{
    itemID: 13,
    itemName: 'organizer',
    itemStatus: true,
  }];
  expect(todolist.filter((i) => i.itemID === 13)).toStrictEqual(itemFalse);
  datamanager.changeStatus(13);
  const mutatedList = datamanager.get();
  expect(mutatedList.filter((i) => i.itemID === 13)).toStrictEqual(itemTrue);
});
it('Should delete an item in the list', () => {
  const item13 = [{
    itemID: 13,
    itemName: 'organizer',
    itemStatus: true,
  }];
  expect(todolist.filter((i) => i.itemID === 13)).toStrictEqual(item13);
  datamanager.delete(13);
  const mutatedList = datamanager.get();
  expect(mutatedList.filter((i) => i.itemID === 13)).toStrictEqual([]);
});
