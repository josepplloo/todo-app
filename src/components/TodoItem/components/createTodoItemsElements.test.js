import createToggleButton from './createToggleButton';
import createEditableLabel from './createEditableLabel';

it('Should recieve a button tag', () => {
  const toggleButton = createToggleButton();
  expect(toggleButton.tagName).toBe('BUTTON');
});
it('Should recieve a div editable tag', () => {
  const editableLabel = createEditableLabel('test', 12);
  expect(editableLabel.tagName).toBe('DIV');
  expect(editableLabel.attributes.contenteditable).toBeTruthy();
});
