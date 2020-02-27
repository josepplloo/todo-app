import data from './data';

const todoItems = data;
const changeListeners = [];

export default {
  getChangeList: () => changeListeners,
  get: () => todoItems,
  getOne: (itemId) => todoItems.filter((item) => item.itemID === itemId)[0],
  put: (item) => todoItems.unshift(item),
  delete: (itemId) => (todoItems.splice(todoItems.indexOf(todoItems.filter((item) => item.itemID === itemId)[0]), 1)),
  changeStatus: (itemId) => todoItems.forEach((item) => {
    if (item.itemID === itemId) { item.itemStatus = !item.itemStatus; }
  }),
  updateName: (itemId, newName) => todoItems.forEach((item) => {
    if (item.itemID === itemId) { item.itemName = newName; }
  }),
  filterComplete: () => todoItems.filter((item) => !item.itemStatus),
  subscribe: (callbackfunction) => changeListeners.push(callbackfunction),
  publish: () => changeListeners.forEach((changeListener) => (changeListener())),
};
