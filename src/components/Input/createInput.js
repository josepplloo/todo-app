import constants from './constants';
import generateID from '../../utils';
import datamanager from '../../data';
import './input.scss';

function createInput() {
  const inputElement = document.createElement('input');
  inputElement.setAttribute('label', constants.altText);
  inputElement.setAttribute('placeholder', constants.placeholderText);
  inputElement.className = 'app-input';
  inputElement.handleInput = (inputText = inputElement.value) => (
    {
      itemID: generateID(),
      itemName: inputText,
      itemStatus: false,
    }
  );

  inputElement.onkeyup = (e) => {
    if (e.code === 'Enter') {
      datamanager.put(inputElement.handleInput());
      inputElement.value = '';
      datamanager.publish();
    }
  };
  return inputElement;
}

export default createInput;
