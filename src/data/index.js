import data from './data';

const todoItems = data;
const changeListeners = [];

export default {
  getChangeList: () => changeListeners,
  get: () => todoItems,
  put: (item) => todoItems.unshift(item),
  subscribe: (callbackfunction) => changeListeners.push(callbackfunction),
  publish: () => changeListeners.forEach((changeListener) => (changeListener())),
};
