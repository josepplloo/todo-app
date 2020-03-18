import createCheckBox from './createCheckBox';
import createEditableLabel from './createEditableLabel';

describe('Test for Componenets inside todo item', () => {
  it('Should recieve a button tag', () => {
    const checkBox = createCheckBox();
    expect(checkBox.tagName).toBe('BUTTON');
  });
  it('Should recieve a div editable tag', () => {
    const editableLabel = createEditableLabel();
    expect(editableLabel.tagName).toBe('DIV');
    expect(editableLabel.attributes.contenteditable).toBeTruthy();
  });
});
