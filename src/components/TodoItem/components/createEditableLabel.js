function createEditableLabel(textValue) {
  const labelElement = document.createElement('div');
  labelElement.setAttribute('contenteditable', true);
  labelElement.innerHTML = textValue;
  return labelElement;
}

export default createEditableLabel;
