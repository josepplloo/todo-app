import './editableLabel.scss';

function createEditableLabel(textValue) {
  const labelElement = document.createElement('div');
  labelElement.setAttribute('contenteditable', true);
  labelElement.innerHTML = textValue;
  labelElement.className = 'editable-label';

  return labelElement;
}

export default createEditableLabel;
