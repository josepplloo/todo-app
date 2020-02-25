import './editableLabel.scss';
import datamanager from '../../../data';

function handleClick(e, itemID) {
  datamanager.updateName(itemID, e.target.innerText);
}

function createEditableLabel(textValue, itemID) {
  const labelElement = document.createElement('div');
  labelElement.setAttribute('contenteditable', true);
  labelElement.innerHTML = textValue;
  labelElement.className = 'editable-label';

  if (datamanager.getOne(itemID).itemStatus) {
    labelElement.className = 'editable-label editable-label-disable';
  } else {
    labelElement.oninput = (e) => handleClick(e, itemID);
  }
  return labelElement;
}

export default createEditableLabel;
