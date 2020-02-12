import constants from './constants';

function createInput() {
  const inputElement = document.createElement('input');
  inputElement.setAttribute('label', constants.altText);
  inputElement.setAttribute('nameplace', constants.nameplaceText);


  return inputElement;
}

export default createInput;
