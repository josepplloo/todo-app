import constants from './constants';
import './input.scss';

function createInput() {
  const inputElement = document.createElement('input');
  inputElement.setAttribute('label', constants.altText);
  inputElement.setAttribute('placeholder', constants.placeholderText);
  inputElement.className = 'app-input';
  inputElement.handleInput = (inputText = inputElement.value) => {
    // TODO: send the value to data object.
    console.log(inputText);
    return {
      itemName: inputText,
      itemStatus: false,
    };
  };

  inputElement.onkeyup = (e) => {
    if (e.code === 'Enter') {
      inputElement.handleInput();
      inputElement.value = '';
    }
  };
  return inputElement;
}

export default createInput;
