import createItemList from './createItemList';

it('should return an <UL /> element', () => {
  const itemListElement = createItemList();
  expect(itemListElement.tagName).toBe('UL');
});
it('should have a styles and layout like the snapshot', () => {
  const itemListElement = createItemList();
  expect(itemListElement).toMatchSnapshot();
});
