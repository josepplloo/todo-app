import data from './data';

const todoItems = data;
const changeListeners = [];

export default {
  getChangeList: () => changeListeners,
  get: () => todoItems,
  put: (item) => todoItems.unshift(item),
  delete: (itemId) => (todoItems.splice(todoItems.indexOf(todoItems.filter((item) => item.itemID === itemId)[0]), 1)),
  subscribe: (callbackfunction) => changeListeners.push(callbackfunction),
  publish: () => changeListeners.forEach((changeListener) => (changeListener())),
};
